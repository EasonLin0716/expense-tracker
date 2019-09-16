const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Record = require('./models/record')
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})


app.use('/', require('./routes/home'))
app.use('/records', require('./routes/record'))

app.listen(3000, () => {
  console.log('app.js is running')
})