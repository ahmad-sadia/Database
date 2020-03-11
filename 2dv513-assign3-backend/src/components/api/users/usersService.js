const User = require('../../../models/user')
const hashing = require('../../../helpers/hashing')

module.exports = {
  async find () {
    const items = await User.findAll()
    const total = await User.total()
    return {
      count: items.length,
      total: total,
      items: items
    }
  },

  async findOnline () {
    const items = await User.findAllOnline()
    return {
      count: items.length,
      items: items
    }
  },

  async create (input) {
    const password = await hashing.hash(input.password)
    return User.create(input.username, password, input.firstName, input.lastName, input.admin)
  },

  async delete (input) {
    return User.deleteAll(input.ids)
  }
}
