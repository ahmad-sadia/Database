const Task = require('../../../models/task')

module.exports = {
  async find (user, input) {
    const items = await Task.findAllByUserId(user.id, input)
    const total = await Task.getTotalByUserId(user.id, input)
    return {
      count: items.length,
      total: total,
      items: items
    }
  },

  async create (user, project, input) {
    return Task.create(user.id, project.id, input.name, input.description, input.hours)
  },

  async delete (user, input) {
    return Task.deleteAllByUserId(user.id, input.ids)
  }
}
