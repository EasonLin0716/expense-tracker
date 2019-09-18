// ./routes/home.js
const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const sumAmount = require('../public/javascripts/sumAmount')
const { authenticated } = require('../config/auth')



// 首頁
router.get('/', authenticated, (req, res) => {
  /* declare selectedCategory as query of Record.find, if select button is clicked by user new query will be passed into if statement */
  const selectedCategory = {}
  if (req.query.category) selectedCategory.category = req.query.category
  Record.find(selectedCategory)
    .exec((err, records) => {
      let totalAmount = sumAmount(records)
      if (err) return console.err(err)
      return res.render('index', { records, totalAmount })
    })
})



module.exports = router