#! /usr/bin/env node
// cli 模块化 action、command、download、option
const { program } = require('commander')
const myOption = require('../lib/core/option')
const myCommand = require('../lib/core/command')

myOption(program)
myCommand(program)

// commander 解析命令行
program.parse(process.argv)
