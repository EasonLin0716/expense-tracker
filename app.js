const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Record = require('./models/record')

mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  res.send('index is here')
})

app.listen(3000, () => {
  console.log('app.js is running')
})