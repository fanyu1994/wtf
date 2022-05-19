const koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors")
const app = new koa();
const router = new Router()
const authRouter = require('./middleware/auth')
const userRouter = require('./middleware/user')
const apiRouter = require('./middleware/api')
require("./models/user")


// token验证不通过
app.use((ctx, next) => {
  return next().catch(err => {
    if (401 == err.status) {
      ctx.status = 401
      ctx.body = "Missing token!"
    } else {
      throw err
    }
  })
})
//跨域处理
app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get("X-Response-Time")
  console.log(`${ctx.method} ${ctx.url} ${rt}`);
})
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set("X-Response-Time", `${ms}ms`)
})

router.get('/', async (ctx) => {
  ctx.body = "application首页"
})

router.use("/user", userRouter.routes())
router.use("/api", apiRouter.routes())
app.use(router.routes())
app.use(router.allowedMethods())

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen("3000", _ => {
  console.log(`server is runing!`);
})

