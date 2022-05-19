const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa-cors')
const serve = require('koa-static')
const path = require('path')
const app = new Koa()
const port = 3030
const home = require('./routes/home')
app.use(cors())
app
  .use(home.routes())
  .use(home.allowedMethods({
    // throw: true, // 抛出错误，代替设置响应头状态
    // notImplemented: () => '不支持当前请求所需要的功能',
    // methodNotAllowed: () => '不支持的请求方式'
  }))
app.use(serve(path.join(__dirname, '/public')))
app.listen(port, () => {
  console.log(`server is running, And listen at port ${port}!`)
})
