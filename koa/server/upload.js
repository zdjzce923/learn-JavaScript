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
const static = require('koa-static')
const path = require('path')
const cors = require('koa2-cors')
const multer = require('@koa/multer')

const app = new koa()
const router = new Router()

app.use(cors()).use(router.routes()).use(router.allowedMethods()).use(Body())
app.use(static(
  path.join(__dirname, '../upload')  // 配置静态文件目录（上传路径）
))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../upload')
  },
  filename: function (req, file, cb) {
    const fileFormat = (file.originalname).split('.')
    cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})
const upload = multer(storage)

router.post('/upload', upload.single('file'), async (ctx) => {
  console.log('ctx.request.body', ctx.request.body)
  ctx.body = {
    data: ctx.request.body
  }
})

app.listen(3000, () => {
  console.log('listen 3000')
})