const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  merchant: {
    type: String
  },

  date: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Define this property is getting from User model
    index: true, // Set as index for query
    required: true
  }
})

module.exports = mongoose.model('record', recordSchema)