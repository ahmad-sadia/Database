const express = require('express')
const router = express.Router()
const config = require('../../configLoader')
const { extractUser } = require('../../middleware/validateUser')
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })

router.head('/status', (req, res) => {
  res.status(200).end()
})

router.get('/', [extractUser, csrfProtection], async (req, res, next) => {
  try {
    if (req.user === undefined || req.user === null) {
      res.redirect('/auth/login?ref=' + req.originalUrl)
      return
    }

    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.render('index.html', { title: config.title })
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
