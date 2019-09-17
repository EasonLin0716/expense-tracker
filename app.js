// ./app.js
/* -----require needed middlewares and others----- */
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Record = require('./models/record')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')


/* -----db connecting----- */
mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})


/* -----middleware setting----- */
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


/* -----route setting----- */
app.use('/', require('./routes/home'))
app.use('/records', require('./routes/record'))

app.listen(3000, () => {
  console.log('app.js is running')
})