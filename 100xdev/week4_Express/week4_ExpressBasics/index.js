const express = require('express')
const app = express()
// route handlers

app.get('/', function (req, res) {
  res.send('<b>Hello World<b>')
})

app.post('/', function (req, res) {
    res.send('Hello World from the post end point')
  })
  

app.get('/asd', function (req, res) {
    res.send('Hi im affan')
  })

app.listen(3000)