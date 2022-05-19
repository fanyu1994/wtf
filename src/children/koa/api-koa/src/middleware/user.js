const Router = require("koa-router")
const { parsePostData } = require("../utils")
const jwt = require('jsonwebtoken');
const { secret, MD5 } = '../config/index'
const router = new Router()

router.post("/login", async ctx => {
  const postData = JSON.parse(await parsePostData(ctx))
  const slot = String(Math.random()).substring(2, 10)
  // const user_info = await 
  if (MD5(postData.password, slot) !== 'test password') {
    const token = jwt.sign(postData, secret, { expiresIn: '24h' })
    ctx.body = token
  }
})

module.exports = router
