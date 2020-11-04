const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/Auction', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
    console.log('Mongo Ready')
  }
)

const users = require('./routes/users')
const lots = require('./routes/lots')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

app.use('/users', users)
app.use('/lots', lots)

app.get('/lots', async (req, res) => {
  const lotsList = Lot.find().exec()
  res.json(lotsList)
})



app.listen(3000, () => {
  console.log('Example app listening')
})