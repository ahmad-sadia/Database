const express = require('express')
const router = express.Router()
const { body, check } = require('express-validator')
const usersService = require('./usersService')
const userService = require('./userService')
const { validateRequest } = require('../../../middleware/validateRequest')

router.get('/', [], async (req, res, next) => {
  try {
    res.send(await usersService.find())
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/online', [], async (req, res, next) => {
  try {
    res.send(await usersService.findOnline())
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.post('/', [validateRequest([
  body('username').isString().isLength({ min: 3 }),
  body('password').isString().isLength({ min: 8 }),
  body('firstName').isString().isLength({ min: 1 }),
  body('lastName').isString().isLength({ min: 1 }),
  body('admin').isIn([0, 1])
])], async (req, res, next) => {
  try {
    res.send(await usersService.create(req.body))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.delete('/', [validateRequest([
  body('ids').isArray({ min: 1, max: 100 })
])], async (req, res, next) => {
  try {
    res.send(await usersService.delete(req.body))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.put('/:id', [validateRequest([
  check('id').isInt({ min: 1 }),
  body('firstName').isString().isLength({ min: 1 }),
  body('lastName').isString().isLength({ min: 1 }),
  body('admin').isIn([0, 1])
])], async (req, res, next) => {
  try {
    res.send(await userService.update(req.user, req.params.id, req.body))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.delete('/:id', [validateRequest([
  check('id').isInt({ min: 1 })
])], async (req, res, next) => {
  try {
    res.send(await userService.delete(req.params.id))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
