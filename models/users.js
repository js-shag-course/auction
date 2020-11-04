const mongoose = require('mongoose')
const schema = mongoose.Schema

const users = new schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    min: 3,
    max: 32,
    required: true
  },
  lots: Array,
  ownedLots: Array
})

module.exports = mongoose.model('User', users)