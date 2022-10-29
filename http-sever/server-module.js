// 模块化 server-module、controller、router
// nodemon server-module.js
const http = require('http')
const router = require('./router')

const server = http.createServer()
server.listen(8080, () => {
  console.log('server is running at http://localhost:8080')
})

server.on('request', (req, res) => {
  router(req, res)
})
