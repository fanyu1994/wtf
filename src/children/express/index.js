
import express from 'express';
import { renderToString } from 'vue/server-renderer'

import ssrhtml from './ssrvue/index.js'


const app = express()
app.get('/', async (req, res) => {


  // let cache = []
  // let rq = JSON.stringify(req, (key, value) => {
  //   if(typeof value === 'object' && value !== null) {

  //     if(cache.includes(value)) return
  //     cache.push(value)
  //   }
  //   return value
  // })
  const resHtml = await renderToString(ssrhtml)
  console.log(resHtml, 'resddd')
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Vue SSR Example</title>
    </head>
    <body>
      <div id="app">${resHtml}</div>
    </body>
  </html>
  `)
})

app.listen(3030, () => { console.log(`express is running at port:${3030}!`) })