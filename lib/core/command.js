const myAction = require('./action')

const myCommand = (program) => {
  // commander 添加命令参数 command
  program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建项目')
    .action(myAction)
}

module.exports = myCommand
