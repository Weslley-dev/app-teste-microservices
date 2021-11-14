const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Bem vindo a calculadora!')
  })

  app.listen(8080, function () {
    console.log('A calculadora está funcionando!')
  })