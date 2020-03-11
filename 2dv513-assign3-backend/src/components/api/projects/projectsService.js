const Project = require('../../../models/project')

module.exports = {
  async find (user) {
    const items = await Project.findAllByUserId(user.id)
    const total = await Project.totalByUserId(user.id)
    return {
      count: items.length,
      total: total,
      items: items
    }
  },

  async create (user, input) {
    return Project.create(user.id, input.name, input.description)
  },

  async delete (user, input) {
    return Project.deleteAllByUserId(user.id, input.ids)
  },

  async total (user) {
    const result = await Project.totalByUserId(user.id)
    return {
      total: result
    }
  }
}
