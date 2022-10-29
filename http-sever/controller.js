const fs = require('fs')

module.exports = {
  index(res) {
    fs.readFile('./index.html', 'utf-8', (err, data) => {
      res.end(data)
    })
  },

  cat(res) {
    fs.readFile('./cat.jpg', (err, data) => {
      res.end(data)
    })
  },

  user(postData, res) {
    console.log(postData)
  },
}
