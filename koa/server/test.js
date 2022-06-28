const koa = require('koa')
const app = new koa({
  proxy: true
})

// async 中间件遇到 next 会一直看下游中间件 直到没有 next 后开始执行上游中间件
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method}, ${ctx.url}, ${rt}`)
})


app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})


app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000, () => {
  console.log('3000 listen')
})