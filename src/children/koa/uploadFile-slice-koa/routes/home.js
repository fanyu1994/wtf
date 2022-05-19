const Router = require("koa-router")
const page = require('./page')
const other = require('./other')
let home = new Router()

home.get('/', async (ctx, next) => {
  ctx.body = '<h1>hello world!</h1>';
})
home.use('/page', page.routes(), page.allowedMethods())
home.use('/other', other.routes(), other.allowedMethods())


module.exports = home