const express = require('express')
const router = express.Router()
const Records = require('../models/record')
const { authenticated } = require('../config/auth')

// 列出全部 Record
router.get('/', authenticated, (req, res) => {
  res.send('列出所有 Record')
})
// 新增一筆 Record 頁面
router.get('/new', authenticated, (req, res) => {
  res.render('new')
})
// 新增一筆 Record
router.post('/', authenticated, (req, res) => {
  console.log(req.body)
  const records = new Records({
    name: req.body.name,
    date: req.body.date,
    category: req.body.category,
    amount: req.body.amount,
    userId: req.user._id
  })
    .save(err => {
      if (err) return console.err(err)
      res.redirect('/')
    })
})
// 修改 Record 頁面
router.get('/:id/edit', authenticated, (req, res) => {
  console.log(`req.params.id: ${req.params.id}`)
  Records.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.err(err)
    res.render('edit', { record })
  })
})
// 修改 Record
router.put('/:id', authenticated, (req, res) => {
  console.log(`req.params.id: ${req.params.id}`)
  Records.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.err(err)
    record.name = req.body.name
    record.category = req.body.category
    record.date = req.body.date
    record.amount = req.body.amount
    record.save(err => {
      if (err) return console.err(err)
      return res.redirect('/')
    })
  })
})
// 刪除 Record
router.delete('/:id', authenticated, (req, res) => {
  Records.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)
    record.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

module.exports = router