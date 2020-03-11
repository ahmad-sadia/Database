const Project = require('../../../models/project')
const Task = require('../../../models/task')

module.exports = {
  async delete (user, id) {
    return Project.deleteByUserId(user.id, id)
  },

  async update (user, id, input) {
    return Project.updateByUserId(user.id, id, input.name, input.description)
  },

  async getTotal (user) {
    return Project.getTotalByUser(user.id)
  },

  async stats (user, id) {
    return Task.userStatsByDaysAndProject(user.id, id, 10)
  }
}
