#! /usr/bin/env node
const { program } = require('commander')

// 获取命令行参数
// console.log(process.argv)

// commander 添加选项参数 option
program.option('-f --framework <framework>', 'choose a framework', '设置框架')

// commander 添加命令参数 command
program
  .command('create <project> [other...]')
  .alias('crt')
  .description('创建项目')
  .action((project, args) => {
    // 命令行的执行逻辑
    console.log(project)
    console.log(args)
  })

// commander 解析命令行
program.parse(process.argv)
