require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '159456',
    database: process.env.DB_NAME || 'unitni',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIAL || 'mysql',
    operatorsAliases: false
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
