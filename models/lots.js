const mongoose = require('mongoose')
const schema = mongoose.Schema

const lots = new schema({
  title: {
    type: String,
    required: true,
    min: 3
  },
  description: String,
  startPrice: {
    type: Number,
    default: 200
  },
  currentPrice: Number,
  bet: {
    type: Number,
    min: 50,
    required: true
  },
  status: {
    type: String,
    enum: ['new', 'inprogress', 'finished'],
    default: 'new'
  },
  startDate: {
    type: Date,
    default: Date.now()
  },
  endDate: {
    type: Date,
    required: true
  },
  images: [Object],
  log: [Object],
  author: mongoose.Schema.Types.ObjectId,
  participants: [mongoose.Schema.Types.ObjectId]
})

module.exports = mongoose.model('lots', lots)
