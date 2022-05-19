// ～/generators/app/index.js

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // yo 会自动调用该方法
  writing () {
    // 我们使用 Generator 提供的 fs 模块尝试往目录中写入文件
    this.fs.write(
      // destinationPath() 基于项目地址
      this.destinationPath('temp.txt'), // 写入地址
      Math.random().toString() // 写入内容
    )
  }
};
