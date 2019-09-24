const mongoose = require('mongoose')
const User = require('../user')
const Record = require('../record')
const userJson = require('./user.json')
const expenseTrackerJson = require('./expenseTracker')
const bcrypt = require('bcryptjs')

mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})


db.once('open', () => {

  let promise = new Promise((resolve, reject) => {
    User.create(userJson, (err, users) => {
      users.forEach(user => {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw err
            user.password = hash
            user.save()
          })
        })
      })
      resolve(users)
    })
  })

  promise.then((user) => {

    for (let i = 0; i < 5; i++) {
      expenseTrackerJson[i]['userId'] = user[0]._id.toString()
      console.log(`data ${i + 1}/10 created...`)
    }

    for (let i = 5; i < 10; i++) {
      expenseTrackerJson[i]["userId"] = user[1]._id.toString()
      console.log(`data ${i + 1}/10 created...`)
    }

    Record.create(expenseTrackerJson, () => {
      console.log('all set, ready to go!')
    })
  })
})