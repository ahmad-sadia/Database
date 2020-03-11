const User = require('../../models/user')
const Token = require('../../models/token')
const hashing = require('../../helpers/hashing')
const Tokenizer = require('../../helpers/tokenizer')
const config = require('../../configLoader')

module.exports = {

  async login (input, remoteAddress) {
    // await User.create('admin', await hashing.hash('admin'), 'Admin', '', 1)
    const user = await User.findByUsername(input.username)

    const result = await hashing.verify(user.password, input.password)
    if (!result) {
      throw new Error('Password miss-matched')
    }

    // create token
    const tokenId = await Token.add(user.id, remoteAddress, config.token.maxAge)

    // generate new token
    const tokenInfo = Tokenizer.generate(tokenId)

    return {
      key: tokenInfo.token,
      maxAge: 1000 * 60 * 60 * tokenInfo.maxAge,
      path: '/'
    }
  },

  async logout (token) {
    await Token.delete(token.id)
  }
}
