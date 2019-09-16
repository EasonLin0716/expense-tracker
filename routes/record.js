const express = require('express')
const router = express.Router()

// 列出全部 Record
router.get('/', (req, res) => {
  res.send('列出所有 Record')
})
// 新增一筆 Record 頁面
router.get('/new', (req, res) => {
  res.send('新增 Record 頁面')
})
// 顯示一筆 Record 的詳細內容
router.get('/:id', (req, res) => {
  res.send('顯示 Record 的詳細內容')
})
// 新增一筆 Record
router.post('/', (req, res) => {
  res.send('建立 Record')
})
// 修改 Record 頁面
router.get('/:id/edit', (req, res) => {
  res.send('修改 Record 頁面')
})
// 修改 Record
router.put('/:id/edit', (req, res) => {
  res.send('修改 Record')
})
// 刪除 Record
router.delete('/:id/delete', (req, res) => {
  res.send('刪除 Record')
})

module.exports = router