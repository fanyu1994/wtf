const Router = require("koa-router")
const router = new Router()
const mime = require('mime');
const fs = require('fs-extra');
const Path = require('path');
router.get("/", async ctx => {
  ctx.body = 'app/api'
})
router.get("/17.jpg", async (ctx, next) => {
  const { path } = ctx;
  ctx.type = mime.getType(path);
  const imageBuffer = await fs.readFile(Path.resolve(__dirname, `.${path}`));
  ctx.body = imageBuffer;
  await next();
});

module.exports = router
