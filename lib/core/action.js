const inquirer = require('inquirer')
const config = require('../../config')
const myDownload = require('./download')

const myAction = async (project, args) => {
  // 命令行的执行逻辑
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: '请选择框架',
      choices: config.framework,
    },
  ])
  console.log(answer)
  myDownload(config.frameworkUrl[answer.framework], project)
}

module.exports = myAction
