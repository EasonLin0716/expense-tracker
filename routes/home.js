// ./routes/home.js
const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const sumAmount = require('../public/javascripts/sumAmount')
const { authenticated } = require('../config/auth')



// 首頁
router.get('/', authenticated, (req, res) => {
  /* declare selectedCategory as query of Record.find, if select button is clicked by user new query will be passed into if statement */

  // .find({ date: {$regex:/09/} })

  const selectedCategory = {}
  if (req.query.category) selectedCategory.category = req.query.category
  if (req.query.month) selectedCategory.date = { $regex: `[/]${req.query.month}[/]` }
  console.log(selectedCategory)
  Record.find({ userId: req.user._id })
    .find(selectedCategory)
    .exec((err, records) => {
      let totalAmount = sumAmount(records)
      if (err) return console.err(err)
      return res.render('index', { records, totalAmount, queryMonth: req.query.month, queryCategory: req.query.category })
    })
})



module.exports = router