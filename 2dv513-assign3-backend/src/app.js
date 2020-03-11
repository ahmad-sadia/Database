const createError = require('http-errors')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const config = require('./configLoader')
const logger = require('./helpers/logger')
const util = require('util')
const path = require('path')
const db = require('./helpers/mysqlDB')
const app = express()
const { validateUser, validateAdmin } = require('./middleware/validateUser')

// set up database
db.connect(() => {
  logger.info(util.format('connected to database %s', config.database))
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.disable('view cache')

// set up middleware
app.use(compression())
app.use(helmet())
app.use(morgan('dev'))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

// for cookies
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

// for csrf protection
// app.use(csurf({ cookie: true }))

// setup routes
app.use('/api/account', [validateUser, require('./components/api/account')])
app.use('/api/users', [validateAdmin, require('./components/api/users')])
app.use('/api/tasks', [validateUser, require('./components/api/tasks')])
app.use('/api/projects', [validateUser, require('./components/api/projects')])
app.use('/auth', require('./components/auth'))
app.use('*', require('./components/index'))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 404).send(err.message)
})

// start listening to server
const server = app.listen(config.port)

server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(util.format('%d requires elevated privileges', config.port))
      process.exit(1)
    case 'EADDRINUSE':
      logger.error(util.format('%d is already in use', config.port))
      process.exit(1)
    default:
      throw error
  }
})

// prinst message when server is listening on a port
server.on('listening', () => {
  const addr = server.address()
  logger.info(util.format('Listening on %d', typeof addr === 'string' ? addr : addr.port))
})
