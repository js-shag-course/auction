const express = require('express')
const router = express.Router()

const Lot = require('../models/lots')

router.get('/', (req, res) => {
  res.send('List')
})

router.get('/:id', (req, res) => {
  res.send('One')
})

router.post('/', (req, res) => {
  res.send('Create')
})

router.put('/:id', (req, res) => {
  res.send('Update')
})

router.delete('/:id', (req, res) => {
  res.send('Delete')
})

module.exports = router