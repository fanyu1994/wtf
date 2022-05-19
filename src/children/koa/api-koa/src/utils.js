const parsePostData = (ctx) => {
  return new Promise((resolve, reject) => {
    try {
      let postData = ""
      ctx.req.addListener("data", data => {
        postData += data
      })
      ctx.req.on('end', _ => {
        resolve(postData)
      })
    } catch (err) {
      reject(err)
    }
  })
}


module.exports = {
  parsePostData
}