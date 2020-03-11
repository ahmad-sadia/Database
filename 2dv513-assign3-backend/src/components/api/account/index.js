const express = require('express')
const router = express.Router()
const statsService = require('./statsService')

router.get('/', [], async (req, res, next) => {
  try {
    res.send(req.user)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/stats/days', [], async (req, res, next) => {
  try {
    res.send(await statsService.days(req.user, 10))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/stats/months', [], async (req, res, next) => {
  try {
    res.send(await statsService.months(req.user, 10))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/current_hours', [], async (req, res, next) => {
  try {
    res.send(await statsService.currentHours(req.user))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/tasks_today', [], async (req, res, next) => {
  try {
    res.send(await statsService.tasksToday(req.user))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
