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
  console.log('db connected! Please wait until message "all set, ready to go!" shows. ')

  User.create(userJson).then(() =>

    User.find({ email: 'asiagodtone@example.com' }, (err, user) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user[0].password, salt, (err, hash) => {
          if (err) throw err
          user[0].password = hash
          user[0].save()
        })
      })

      for (let i = 0; i < 5; i++) {
        expenseTrackerJson[i]["userId"] = user[0]._id.toString()
        console.log(`data ${i + 1}/10 created...`)
      }


    })

  ).then(() =>

    User.find({ email: 'bigdaddy@example.com' }, (err, user) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user[0].password, salt, (err, hash) => {
          if (err) throw err
          user[0].password = hash
          user[0].save()
        })
      })

      for (let i = 5; i < 10; i++) {
        expenseTrackerJson[i]["userId"] = user[0]._id.toString()
        console.log(`data ${i + 1}/10 created...`)
      }

    })

  ).then(() =>

    Record.create(expenseTrackerJson, () => {
      console.log('all set, ready to go!')
    })

  )

})