const express = require('express')
const router = express.Router()

// 首頁
router.get('/', (req, res) => {
  res.send('Index is here')
})

module.exports = router