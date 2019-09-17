const mongoose = require('mongoose')
const Record = require('../record')
const expenseTrackerJson = require('./expenseTracker')

mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  seedCreate()
})


function seedCreate() {
  let count = 0
  expenseTrackerJson.forEach(record => {
    Record.create(record, () => {
      count++
      console.log(`${count}/${expenseTrackerJson.length} done`)
      if (count === expenseTrackerJson.length) {
        console.log('All set, Ready to go! (ctrl+c to quit)')
      }
    })
  })
}