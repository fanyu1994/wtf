const Router = require('koa-router')
const multiparty = require('multiparty')
const fs = require('fs')
const fse = require('fs-extra')
const async = require('async')
const { copyFile } = require('fs/promises')
const path = require('path')
let page = new Router()
page.get('/404', async (ctx) => {
  ctx.body = '404 page!'
})


page.post('/upload', async (ctx, next) => {
  let form = new multiparty.Form({
    uploadDir: 'dist'
  })
  form.parse(ctx.req, async (err, fields, files) => {
    if (err) throw err
    const file = files['file'][0]
    const { name, total, index } = fields
    let newPath = `Upload/imgs/${name[0]}` // 存放文件夹名字 => /Upload/imgs/12
    /**
     * file 长这样: {
        fieldName: 'file',
        originalFilename: '10193.jpg',
        path: 'dist\\zyCVT6QPc7BMWxo9XpeGf-5V.jpg',
        headers: [Object],
        size: 848
      }
     */
    getDir(newPath).then(() => {
      fs.renameSync(file.path, newPath + '/' + index[0])
    })

    if (total[0] === index[0]) {
      console.log(name, "上传结束!");
      const chunks = fs.readdir(`Upload/imgs/${name[0]}`)
      chunks.sort((a, b) => a - b).map(chunkPath => {
        // 合并文件
        fse.appendFileSync(
          path.join(newPath, name[0] + '.' + file.originalFilename.split('.')[1]),
          fse.readFileSync(`${newPath}/${chunkPath}`)
        )
      })
      // fs.readdir('dist', (err, files) => {
      //   // console.log(err, bytesRead, buffer);
      //   if (err) throw err
      //   let writeStream = fs.createWriteStream(`${newPath}.${file.originalFilename.split('.')[1]}`)
      //   files.forEach(e => {
      //     fs.readFile('dist/' + e, (err, data) => {
      //       if (err) throw err
      //       writeStream.write(data)

      //     })
      //   });
      // })


    }
    function getDir(dir) {
      return new Promise((resolve, reject) => {
        fs.stat(dir, (err, stats) => {
          if (err) {
            fs.mkdir(dir, { recursive: true }, () => resolve())
          }
          else resolve()
        })
      })
    }
  })
  ctx.body = '文件上传!'
})


module.exports = page