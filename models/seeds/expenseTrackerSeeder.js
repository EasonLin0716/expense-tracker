const mongoose = require('mongoose')
const Record = require('../record')

mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < 5; i++) {
    Record.create(
      {
        name: 'expense' + i,
        category: '交通',
        date: '2019/9/17',
        amount: 100
      }
    )
  }
  console.log('seeder files created.')
})