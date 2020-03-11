const express = require('express')
const router = express.Router()
const { body, check } = require('express-validator')
const { validateRequest } = require('../../../middleware/validateRequest')
const projectsService = require('./projectsService')
const projectService = require('./projectService')
const { extractProjectById } = require('../../../middleware/checkProject')

router.get('/', [], async (req, res, next) => {
  try {
    res.send(await projectsService.find(req.user))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.post('/', [validateRequest([
  body('name').isLength({ min: 2 }),
  body('description').isString()
])], async (req, res, next) => {
  try {
    res.send(await projectsService.create(req.user, req.body))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.delete('/', [validateRequest([
  body('ids').isArray({ min: 1, max: 100 })
])], async (req, res, next) => {
  try {
    res.send(await projectsService.delete(req.user, req.body))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/total', [], async (req, res, next) => {
  try {
    res.send(await projectsService.total(req.user))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/:id', [validateRequest([
  check('id').isInt({ min: 1 })
]), extractProjectById], async (req, res, next) => {
  try {
    res.send(req.project)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.put('/:id', [validateRequest([
  check('id').isInt({ min: 1 }),
  body('name').isLength({ min: 2 }),
  body('description').isString()
])], async (req, res, next) => {
  try {
    res.send(await projectService.update(req.user, req.params.id, req.body))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.delete('/:id', [validateRequest([
  check('id').isInt({ min: 1 })
])], async (req, res, next) => {
  try {
    res.send(await projectService.delete(req.user, req.params.id))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/:id/stats', [validateRequest([
  check('id').isInt({ min: 1 })
])], async (req, res, next) => {
  try {
    res.send(await projectService.stats(req.user, req.params.id))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
