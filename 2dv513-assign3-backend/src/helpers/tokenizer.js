const jwt = require('jsonwebtoken')
const config = require('../configLoader')

module.exports = {
  generate (id, maxAge = undefined) {
    return this.sign({ sub: id }, maxAge || config.token.maxAge)
  },

  sign (data, maxAge) {
    return {
      data: data,
      token: jwt.sign(data, config.token.signature, { expiresIn: maxAge + 'h' }),
      maxAge: maxAge
    }
  },

  async verify (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, config.token.signature, (err, decode) => {
        if (err) {
          reject(err)
          return
        }
        resolve(decode)
      })
    })
  }
}
