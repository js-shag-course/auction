const express = require('express')
const router = express.Router()

const User = require('../models/users')

router.get('/', async (req, res) => {
  const usersList = await User
    .find()
    .populate('lots')
    .exec()
  res.json(usersList)
})

router.get('/:id', async (req, res) => {
  const user = await User
    .findById(req.params.id)
    .populate({
      path: 'lots',
      select: 'title startPrice'
    })
    .exec()
  res.json(user)
})

router.post('/register', async (req, res) => {
  const newUser = new User(req.body)
  const user = await newUser.save()
  res.json(user)
})

module.exports = router
