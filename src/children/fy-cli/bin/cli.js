#! /usr/bin/env node
// ora -> 动效效果
// comander -> 自定义命令行指令 
// chalk -> 命令行打印定义样式  
// inquirer -> 询问交互  
// cross-spawn ->  跨平台 shell 工具
// 使用 figlet 绘制 Logo
const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')

const spawn = require('cross-spawn');

// // 定义需要按照的依赖
// const dependencies = ['vue', 'vuex', 'vue-router'];

// // 执行安装
// const child = spawn('npm', ['install', '-D'].concat(dependencies), { 
//     stdio: 'inherit' 
// });

// // 监听执行结果
// child.on('close', function(code) {
//     // 执行失败
//     if(code !== 0) {
//         console.log(chalk.red('Error occurred while installing dependencies!'));
//         process.exit(1);
//     }
//     // 执行成功
//     else {
//         console.log(chalk.cyan('Install finished'))   
//     }
// })

// //inquirer 控制台交互询问 
// inquirer.prompt([
//   // {
//   //   type: 'input',
//   //   name: 'age',
//   //   message: '你多大',
//   //   default: '18'
//   // },
//   // {
//   //   type: 'list',
//   //   name: 'sex',
//   //   message: '你的性别?',
//   //   choices: ["男", "女"]

//   // },
//   {
//     type: 'confirm',
//     name: 'confirm',
//     message: '确定开始?',
//     default: true
//   }
// ])
//   .then(answer => {
//     // chalk 控制台样式控制
//     Object.entries(answer).forEach(([key, value], i) => {
//       console.log(`${key}: ${chalk.rgb(4, 158, 218).underline(value)}`);
//     });

//   })


// commander 自定义命令行指令
program
  .command('create <app-name>')
  .description('create a new project')
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options) => {
    require('../lib/create.js')(name, options)
  })


// 配置 config 命令
program
  .command('config [value]')
  .description('inspect and modify the config')
  .option('-g, --get <path>', 'get value from option')
  .option('-s, --set <path> <value>')
  .option('-d, --delete <path>', 'delete option from config')
  .action((value, options) => {
    console.log(value, options)
  })

// 配置 ui 命令
program
  .command('ui')
  .description('start add open roc-cli ui')
  .option('-p, --port <port>', 'Port used for the UI Server')
  .action((option) => {
    console.log(option)
  })
program
  // 监听 --help 执行
  .on('--help', () => {
    // 新增说明信息
    console.log('\r\n' + figlet.textSync('fanyu', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
    }));
    // 新增说明信息
    console.log(`\r\nRun ${chalk.cyan(`roc <command> --help`)} show details\r\n`)
  })

program
  // 配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')

program.parse(process.argv)
