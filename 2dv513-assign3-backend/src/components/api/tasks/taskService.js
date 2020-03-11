const Task = require('../../../models/task')

module.exports = {
  async delete (user, id) {
    return Task.deleteByUserId(user.id, id)
  },

  async update (user, id, input) {
    return Task.updateByUserId(user.id, id, input.name, input.description, input.hours, input.projectId)
  },

  async getTotal (user) {
    return Task.getTotalByUser(user.id)
  }
}
