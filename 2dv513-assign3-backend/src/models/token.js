const db = require('../helpers/mysqlDB')

module.exports = {
  async findByUserId (userId) {
    const result = await db.query('select * from tokens where userId = ?', [userId])
    if (result.length === 0) {
      return {}
    }
    return result[0]
  },

  async find (id) {
    const result = await db.query('select * from tokens where id = ?', [id])
    if (result.length === 0) {
      return null
    }
    return result[0]
  },

  async findValid (id) {
    const result = await db.query('select *, TIMESTAMPDIFF(MINUTE,tokens.accessedAt,NOW()) AS lastAccess from tokens where id = ? and NOW() < expiredAt ', [id])
    if (result.length === 0) {
      return null
    }
    return result[0]
  },

  async add (userId, ip, maxAge) {
    const result = await db.query('insert into tokens (userId, ip, createdAt, updatedAt, accessedAt, expiredAt) ' +
      'values (?, ?, NOW(), NOW(), NOW(), DATE_ADD(NOW() , INTERVAL ? HOUR))', [userId, ip, maxAge])
    return result.insertId
  },

  async delete (id) {
    const result = await db.query('delete from tokens where id = ?', [id])
    if (result.length === 0) {
      return {}
    }
    return result[0]
  },

  async updateAccessedAt (id) {
    await db.query('update tokens set accessedAt = NOW() where id = ?', [id])
  }
}
