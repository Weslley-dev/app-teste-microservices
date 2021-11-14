const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Bem vindo a calculadora!')
  })
app.get('/div/:op1/:op2', function (req, res) {
    let op1 = parseInt(req.params.op1)
    let op2 = parseInt(req.params.op2)
    let div = (op1 / op2).toString()
    res.send(div)
  })
  app.listen(8080, function () {
    console.log('A calculadora está funcionando!')
  })