const Router = require('koa-router')

const other= new Router()

other.get('/other', async (ctx)=>{
  console.log('other page!');
  ctx.body = '<h2>other page!!</h2>'
})

module.exports = other