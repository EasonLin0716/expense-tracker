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
  console.log('db connected!')

  User.create(userJson).then(() =>

    User.find({ email: 'asiagodtone@example.com' }, (err, user) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user[0].password, salt, (err, hash) => {
          if (err) throw err
          user[0].password = hash
          user[0].save()
        })
      })

      expenseTrackerJson[0]["userId"] = user[0]._id.toString()
      expenseTrackerJson[1]["userId"] = user[0]._id.toString()
      expenseTrackerJson[2]["userId"] = user[0]._id.toString()
      expenseTrackerJson[3]["userId"] = user[0]._id.toString()
      expenseTrackerJson[4]["userId"] = user[0]._id.toString()
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

      expenseTrackerJson[5]["userId"] = user[0]._id.toString()
      expenseTrackerJson[6]["userId"] = user[0]._id.toString()
      expenseTrackerJson[7]["userId"] = user[0]._id.toString()
      expenseTrackerJson[8]["userId"] = user[0]._id.toString()
      expenseTrackerJson[9]["userId"] = user[0]._id.toString()
    })

  ).then(() =>

    Record.create(expenseTrackerJson)

  )

  console.log('Data create complete!')
})