const db = require('../helpers/mysqlDB')

module.exports = {
  async findAll () {
    return db.query('select id, username, firstName, lastName, admin, createdAt, updatedAt from users', [])
  },

  async find (id) {
    const result = await db.query('select * from users where id = ?', [id])
    if (result.length === 0) {
      throw new Error('user not found')
    }
    return result[0]
  },

  async findByUsername (username) {
    const result = await db.query('select * from users where username = ? limit 1', [username])
    if (result.length === 0) {
      throw new Error('user not found')
    }
    return result[0]
  },

  async create (username, password, firstName, lastName, admin) {
    const result = await db.query('insert into users (username, password, firstName, lastName, admin, createdAt, updatedAt) values (?, ?, ?, ?, ?, NOW(), NOW())',
      [username, password, firstName, lastName, admin])
    return this.find(result.insertId)
  },

  async delete (id) {
    await db.query('delete from tasks where userId = ?', [id])
    await db.query('delete from projects where userId = ?', [id])
    await db.query('delete from tokens where userId = ?', [id])
    return db.query('delete from users where id = ?', [id])
  },

  async deleteAll (ids) {
    await db.query('delete from tasks where userId in (?)', [ids])
    await db.query('delete from projects where userId in (?)', [ids])
    await db.query('delete from tokens where userId in (?)', [ids])
    return db.query('delete from users where id in (?)', [ids])
  },

  async total () {
    const result = await db.query('select count(*) as count from users', [])
    return result[0].count
  },

  async findAllOnline () {
    return db.query('select * from usersOnline', [])
  }
}
