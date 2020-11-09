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
  lots: [{ type: schema.Types.ObjectId, ref: 'Lot' }],
  ownedLots: [{ type: schema.Types.ObjectId, ref: 'Lot' }]
})

module.exports = mongoose.model('User', users)