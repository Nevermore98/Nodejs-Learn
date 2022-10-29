const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer()
server.listen(8080, () => {
  console.log('server is running at http://localhost:8080')
})

server.on('request', (req, res) => {
  console.log('监听请求')
  // 1.设置请求头，写入响应体
  // res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // res.write('<h1 style="color: red">你好</h1>')
  // res.end()
  // 2.读取本地 html 作为响应体
  // fs.readFile('./index.html', 'utf-8', (err, data) => {
  //   res.end(data)
  //   // 等价于下面两行
  //   // res.write(data)
  //   // res.end()
  // })
  // 3.方法
  if (req.method === 'GET') {
    console.log(req.url)
    console.log(url.parse(req.url, true).query.id)
    fs.readFile('./index.html', 'utf-8', (err, data) => {
      res.end(data)
      // 等价于下面两行
      // res.write(data)
      // res.end()
    })
  }
  if (req.method === 'POST') {
    console.log('post')
    let post = ''
    // 监听 req 的 data 事件
    req.on('data', (chunk) => {
      post += chunk
    })
    req.on('end', () => {
      console.log(querystring.parse(post))
    })
  }
})
