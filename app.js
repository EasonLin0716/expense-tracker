// ./app.js
/* -----require needed middlewares and others----- */
const express = require('express')
const app = express()
const mongoose = require('mongoose')
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
const Record = require('./models/record')
const bodyParser = require('body-parser')


/* -----middleware setting----- */
app.use(express.static('public'))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
const Handlebars = require("handlebars")
Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
  return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


/* -----route setting----- */
app.use('/', require('./routes/home'))
app.use('/records', require('./routes/record'))
app.use('/users', require('./routes/user'))

app.listen(3000, () => {
  console.log('app.js is running')
})