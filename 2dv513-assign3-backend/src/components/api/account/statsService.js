const Task = require('../../../models/task')

module.exports = {
  async days (user, days = 10) {
    return Task.userStatsByDays(user.id, days)
  },

  async months (user, months = 10) {
    return Task.userStatsByMonths(user.id, months)
  },

  async currentHours (user) {
    return Task.currentMonthHours(user.id)
  },

  async tasksToday (user) {
    const items = await Task.tasksToday(user.id)
    return {
      items: items,
      count: items.length
    }
  }
}
