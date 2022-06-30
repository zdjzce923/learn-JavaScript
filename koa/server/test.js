const koa = require('koa')
const http = require('http')
const https = require('https')
const app = new koa({
  proxy: true,
  keys: ['im a ssssss', 'i like xxx']    // 设置 Cookie
})
app.context.db = 'context prototype property'  // 为 ctx 原型添加其他属性
app.use(async ctx => {
  console.log(ctx.db)
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
  ctx.cookies.set('name', 'tobi', { signed: true }) // 倒换秘钥
}).use(async ctx => {
  ctx.body = 'Hello World'
})  // 链式调用



/* app.listen(3000, () => {
  console.log('3000 listen')
}) */

app.on('error', err => {
  log.error('server error', err)
})

// koa 与 HTTP 传统的 1对1 展现不同，它可以集成多个 Koa 应用程序安装在单个更大的 HTTP 应用程序中
http.createServer(app.callback()).listen(3001)
https.createServer(app.callback()).listen(3003)