const mongoose = require('mongoose')
const { db } = require('../config/index')
console.log(`${db.address}/test`, '消息');
mongoose.connect(`${db.address}/test`, { useMongoClient: true }, err => {
  if (err) {
    console.log("数据库连接失败！")
  } else {
    console.log("数据库连接成功！")
  }
})

mongoose.connection.once("open", () => {
  console.log("数据库连接成功!");
})
mongoose.connection.once("close", () => {
  console.log("数据库断开!");
})

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  age: String
})

const userModle = mongoose.model("user", userSchema)

module.exports = {
  userModle
}