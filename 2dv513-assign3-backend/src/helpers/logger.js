const winston = require('winston')
const { combine, timestamp, printf } = winston.format
const config = require('../configLoader')

const logger = winston.createLogger({
  level: config.log.level,
  format: combine(
    timestamp(),
    winston.format.splat(),
    printf(({ timestamp, level, message, meta }) => {
      return `${timestamp} [${level}] ${message} ${meta ? JSON.stringify(meta) : ''}`
    })
  ),
  transports: [
    new winston.transports.File({
      filename: config.log.filename
    })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console())
}

module.exports = logger
