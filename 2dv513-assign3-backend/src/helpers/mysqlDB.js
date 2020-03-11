const mysql = require('mysql')
const config = require('../configLoader')
const logger = require('./logger')

const state = {
  pool: null
}

exports.connect = function (callback) {
  const dbConfig = config.databases[config.database]
  state.pool = mysql.createPool({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    dateStrings: true// this will fix an issue with timezone
  })
  if (callback !== undefined) {
    callback()
  }
}

exports.query = (statment, values = []) => {
  return new Promise((resolve, reject) => {
    state.pool.query(statment, values, (err, result) => {
      if (err) {
        logger.error(err.message)
        reject(new Error('Something went wrong'))
        return
      }
      resolve(result)
    })
  })
}

exports.get = function () {
  return state.pool
}
