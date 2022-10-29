const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const myDownload = (url, project) => {
  const spinner = ora().start()
  spinner.text = '下载中...'

  download(`direct:${url}`, project, { clone: true }, (err) => {
    if (!err) {
      spinner.succeed('下载完成')
      console.log(chalk.green.bold('Done!'), chalk.bold('you run:'))
      console.log('cd ' + project)
      console.log('npm install ')
      console.log('npm run dev ')
    } else {
      spinner.fail('下载失败')
    }
  })
}

module.exports = myDownload
