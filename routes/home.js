// ./routes/home.js
const express = require('express')
const router = express.Router()
const Record = require('../models/record')

// 首頁
router.get('/', (req, res) => {
  Record.find((err, records) => {
    if (err) return console.err(err)
    return res.render('index', { records })
  })
})

module.exports = router