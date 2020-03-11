const config = require('../configLoader.js')
const tokenizer = require('../helpers/tokenizer')
const Token = require('../models/token')
const User = require('../models/user')

function _extractTokenFromCookie (cookie) {
  if (cookie === undefined) {
    return null
  }
  const entries = cookie.split('; ')
  for (const entry of entries) {
    if (entry.startsWith(config.token.name)) {
      return entry.substr(config.token.name.length + 1)
    }
  }
  return null
}

function _extractTokenFromBody (body) {
  if (body && body.username === '_token' && body.password) {
    return body.password
  }
  return null
}

function _extractToken (req) {
  let token = _extractTokenFromCookie(req.headers.cookie)
  if (token !== null) {
    return token
  }
  token = _extractTokenFromBody(req.body)
  if (token !== null) {
    return token
  }
  return token
}

const validateToken = async (tokenStr) => {
  try {
    const tokenData = await tokenizer.verify(tokenStr)
    if (!String(tokenData.sub)) {
      return null
    }
    const token = await Token.findValid(tokenData.sub)
    // check accessedAt
    if (token.lastAccess > 1) {
      await Token.updateAccessedAt(token.id)
    }
    return token
  } catch (e) {
    return null
  }
}

// extract token from request
const extractToken = async (req, res, next) => {
  const token = _extractToken(req)
  if (!String(token)) {
    req.token = await validateToken(token)
  }
  next()
}

// extract user from request
const extractUser = async (req, res, next) => {
  const token = _extractTokenFromCookie(req.headers.cookie)
  if (token !== null) {
    try {
      req.token = await validateToken(token)
      req.user = await User.find(req.token.userId)
    } catch (e) {
      return next()
    }
  }
  next()
}

// validate user from request
const validateUser = async (req, res, next) => {
  const token = _extractToken(req)

  if (token === null) {
    return res.status(401).end()
  }

  try {
    req.token = await validateToken(token)
    req.user = await User.find(req.token.userId)
  } catch (e) {
    return res.status(401).end()
  }
  next()
}

// validate admin from request
const validateAdmin = async (req, res, next) => {
  const token = _extractToken(req)

  if (token === null) {
    return res.status(401).end()
  }

  try {
    req.token = await validateToken(token)
    req.user = await User.find(req.token.userId)
    if (req.user.admin !== 1) {
      return res.status(401).end()
    }
  } catch (e) {
    return res.status(401).end()
  }
  next()
}

module.exports = {
  validateUser: validateUser,
  validateAdmin: validateAdmin,
  validateToken: validateToken,
  extractUser: extractUser,
  extractToken: extractToken
}
