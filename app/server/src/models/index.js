// const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

// const env = process.env.NODE_ENV || 'development';

const db = {}

// db settings
const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db
)

db.sequelize = sequelize
db.Sequelize = Sequelize

// using table `Users` // MySQL
db.User = require('./User')(sequelize, Sequelize)
db.Post = require('./Post')(sequelize, Sequelize)

module.exports = db
