const controller = require('./controller')
const querystring = require('querystring')

module.exports = (req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      controller.index(res)
    }
    if (req.url === '/cat') {
      controller.cat(res)
    }
  }

  if (req.method === 'POST') {
    let postData = ''
    // 监听 req 的 data 事件
    req.on('data', (chunk) => {
      postData += chunk
    })
    req.on('end', () => {
      controller.user(querystring.parse(postData), res)
    })
  }
}
