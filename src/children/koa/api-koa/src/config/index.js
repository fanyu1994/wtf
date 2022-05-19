const secret = "fanyu"
const db = {
  // address:'mongodb://127.0.0.1:27017',
  address:'mongodb://114.55.234.157:27017',
}// 数据库

const MD5 = (password, solt) => {
  const md5 = require('md5')
  return new Promise((resolve) => {
    let ps = md5(md5(password) + solt)
    resolve(ps)
  })
}
module.exports = {
  secret,
  db,
  MD5
}