const path = require('path')
const fs = require('fs')

const file = path.join('../../../../data', 'config.js')
if (fs.existsSync(file)) {
  module.exports = require(file)
} else {
  module.exports = require('../config')
}
