const db = require('../helpers/mysqlDB')

module.exports = {
  async find (id) {
    const result = await db.query('select * from projects where id = ?', [id])
    if (result.length === 0) {
      throw new Error('Project not found')
    }
    return result[0]
  },

  async create (userId, name, description) {
    const result = await db.query('insert into projects (userId, name, description, createdAt, updatedAt) values (?, ?, ?, NOW(), NOW())',
      [userId, name, description])
    return this.find(result.insertId)
  },

  async delete (id) {
    return db.query('delete from projects where id = ?', [id])
  },

  async deleteAll (ids) {
    return db.query('delete from projects where id in (?)', [ids])
  },

  async getTotal () {
    return db.query('select count(*) from projects')
  },

  async findAllByUserId (userId) {
    return db.query('select *, ' +
    '(select count(*) from tasks where projectId = projects.id) as tasks, ' +
    '(select sum(hours) from tasks where projectId = projects.id) as hours ' +
    'from projects where userId = ?', [userId])
  },

  async findByUserId (userId, id) {
    const result = await db.query('select * from projects where userId = ? and id = ?', [userId, id])
    if (result.length === 0) {
      throw new Error('Project not found')
    }
    return result[0]
  },

  async updateByUserId (userId, id, name, description) {
    await db.query('update projects set name = ?, description = ?, updatedAt = NOW() where userId = ? and id = ?', [name, description, userId, id])
    return this.find(id)
  },

  async deleteByUserId (userId, id) {
    return db.query('delete from projects where userId = ? and id = ?', [userId, id])
  },

  async deleteAllByUserId (userId, ids) {
    return db.query('delete from projects where userId = ? and id in (?)', [userId, ids])
  },

  async totalByUserId (userId) {
    const result = await db.query('select count(*) as count from projects where userId = ?', [userId])
    return result[0].count
  }

}
