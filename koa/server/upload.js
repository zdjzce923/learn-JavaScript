/**
 * 本地上传
 *  1. 导入 koa koa-router koa-body 模块 设置 路由默认访问路径
 *  2. 设置 upload 文件夹路径
 *  3. index.html 前端上传功能
 *  4. 解决跨域问题
 *  5. 引入 multer 处理上传接口
 * */

const koa = require('koa')
const Router = require('koa-router')
const Body = require('koa-body')

const app = new koa()
const router = new Router()

router.get('/', async (ctx) => {
  ctx.type = 'html'
  ctx.body = '<h1>hello world</h1>'
})

app.use(router.routes()).use(router.allowedMethods()).use(Body())

app.listen(3000, () => {
  console.log('listen 3000')
})