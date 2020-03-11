const express = require('express')
const router = express.Router()
const tasksService = require('./tasksService')
const taskService = require('./taskService')
const { validateRequest } = require('../../../middleware/validateRequest')
const { checkProjectByBody } = require('../../../middleware/checkProject')
const { body, check } = require('express-validator')

router.get('/', [validateRequest([
  check('filterValue').isLength({ max: 255 }),
  check('sortOrder').isIn(['asc', 'desc']),
  check('sortBy').isString().isLength({ max: 255 }),
  check('pageIndex').isNumeric({ min: 0 }).toInt(),
  check('pageSize').isInt({ min: 10 }).toInt(10)
])], async (req, res, next) => {
  try {
    res.send(await tasksService.find(req.user, req.query))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.post('/', [validateRequest([
  body('name').isLength({ min: 2 }),
  body('description').isString(),
  body('projectId').isInt().custom(checkProjectByBody),
  body('hours').isInt()
])], async (req, res, next) => {
  try {
    res.send(await tasksService.create(req.user, req.project, req.body))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.delete('/', [validateRequest([
  body('ids').isArray({ min: 1, max: 100 })
])], async (req, res, next) => {
  try {
    res.send(await tasksService.delete(req.user, req.body))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.put('/:id', [validateRequest([
  check('id').isInt({ min: 1 }),
  body('name').isLength({ min: 2 }),
  body('description').isString(),
  body('projectId').isInt().custom(checkProjectByBody),
  body('description').isString()
])], async (req, res, next) => {
  try {
    res.send(await taskService.update(req.user, req.params.id, req.body))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.delete('/:id', [validateRequest([
  check('id').isInt({ min: 1 })
])], async (req, res, next) => {
  try {
    res.send(await taskService.delete(req.user, req.params.id))
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
