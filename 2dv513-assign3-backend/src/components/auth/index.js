const express = require('express')
const router = express.Router()
const { validateRequest } = require('../../middleware/validateRequest')
const { extractUser } = require('../../middleware/validateUser')
const config = require('../../configLoader')
const { body } = require('express-validator')
const authService = require('./authService')

router.get('/login', [extractUser], async (req, res, next) => {
  try {
    if (req.user !== undefined && req.user !== null) {
      res.redirect('/')
      return
    }
    res.render('login.html', {
      title: config.title
    })
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.post('/login', validateRequest([
  body('username').isLength({ min: 4 }),
  body('password').isLength({ min: 4 })
]), async (req, res, next) => {
  const input = req.body
  try {
    const token = await authService.login(input, req.connection.remoteAddress)
    res.cookie(config.token.name, token.key, { maxAge: token.maxAge, httpOnly: false })
    res.redirect(req.query.ref ? req.query.ref : '/')
  } catch (err) {
    res.render('login.html', { title: config.title, error: err.message })
  }
})

router.get('/logout', [extractUser], async (req, res, next) => {
  try {
    if (req.user !== undefined && req.user !== null) {
      await authService.logout(req.token)
    }
    res.cookie(config.token.name, '', { expires: new Date() })
    res.redirect('/auth/login')
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
