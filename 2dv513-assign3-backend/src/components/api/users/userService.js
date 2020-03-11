const User = require('../../../models/user')

module.exports = {
  async delete (id) {
    return User.delete(id)
  }
}
