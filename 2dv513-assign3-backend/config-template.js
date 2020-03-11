module.exports = {
  title: 'Work Hours',
  port: 3000,
  database: 'production',

  log: {
    level: 'info',
    filename: 'log.log'
  },

  token: {
    signature: 'Trad8zClg0AeaiL1IF4Ecdj6LubvF6YN', // Change me
    maxAge: 24, // max age of token in hours
    name: 'X-Work-Hours'
  },

  databases: {
    production: {
      host: '',
      port: 3306,
      user: '',
      password: '',
      database: ''
    }
  }
}
