const db = require('../helpers/mysqlDB')

module.exports = {
  async findAllByUserId (userId, input) {
    let searchStmt = ''
    if (input.filterValue !== '') {
      searchStmt = 'and (tasks.name like \'%' + input.filterValue + '%\')'
    }
    return db.query('select tasks.*, projects.name as projectName from tasks ' +
    'left join projects on (projectId = projects.id) where tasks.userId = ? ' + searchStmt + ' order by ? limit ?,?', [userId, input.sortBy, input.pageIndex, input.pageSize])
  },

  async findById (id) {
    const result = await db.query('select tasks.*, projects.name as projectName from tasks left join projects on (projectId = projects.id) where tasks.id = ?', [id])
    if (result.length === 0) {
      throw new Error('not found')
    }
    return result[0]
  },

  async create (userId, projectId, name, description, hours) {
    const result = await db.query('insert into tasks (userId, projectId, name, description, hours, createdAt, updatedAt) values (?, ?, ?, ?, ?, NOW(), NOW())',
      [userId, projectId, name, description, hours])
    return this.findById(result.insertId)
  },

  async delete (id) {
    return db.query('delete from tasks where id = ?', [id])
  },

  async updateByUserId (userId, id, name, description, hours, projectId) {
    await db.query('update tasks set name = ?, description = ?, hours = ?, projectId = ?, updatedAt = NOW() where id = ? and userId = ?',
      [name, description, hours, projectId, id, userId])
    return this.findById(id)
  },

  async deleteByUserId (userId, id) {
    return db.query('delete from tasks where userId = ? and id = ?', [userId, id])
  },

  async deleteAllByUserId (userId, ids) {
    return db.query('delete from tasks where userId = ? and id in (?)', [userId, ids])
  },

  async getTotalByUserId (userId) {
    const result = await db.query('select count(*) as count from tasks where userId = ?', [userId])
    return result[0].count
  },

  async userStatsByDays (userId, days) {
    return db.query('SELECT SUM(hours) as hours, DATE(createdAt) as date FROM tasks WHERE userId = ? ' +
      'GROUP BY DATE(createdAt) ORDER BY DATE(createdAt) limit ?',
    [userId, days])
  },

  async userStatsByDaysAndProject (userId, projectId, days) {
    return db.query('SELECT SUM(hours) as hours, DATE(createdAt) as date FROM tasks WHERE userId = ? and projectId =  ?' +
      'GROUP BY DATE(createdAt) ORDER BY DATE(createdAt) limit ?',
    [userId, projectId, days])
  },

  async userStatsByMonths (userId, months) {
    return db.query('SELECT SUM(hours) as hours, YEAR(createdAt) AS year, MONTH(createdAt) as month FROM tasks WHERE userId = ? ' +
      'GROUP BY YEAR(createdAt), MONTH(createdAt) ORDER BY YEAR(createdAt), MONTH(createdAt) limit ?',
    [userId, months])
  },

  async currentMonthHours (userId) {
    const result = await db.query('SELECT SUM(hours) as hours FROM tasks WHERE userId = ? and MONTH(createdAt) = MONTH(CURRENT_DATE()) AND YEAR(createdAt) = YEAR(CURRENT_DATE()) ',
      [userId])
    return result[0]
  },

  async tasksToday (userId) {
    return db.query('select * from tasksToday WHERE userId = ? ', [userId])
  }
}
