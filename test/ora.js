const ora = require('ora')

const spinner = ora().start()
spinner.text = 'Loading...'

setTimeout(() => {
  spinner.succeed('succuss')
  spinner.fail('fail')
  spinner.info('info')
}, 1000)
