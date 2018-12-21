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
db.Depart = require('./Depart')(sequelize, Sequelize)

// User 1 : Depart 1 - 유저 한명은 Depart 한 곳에 소속되어 있음
db.Depart.hasOne(db.User, { foreignKey: 'schoolinfo', sourceKey: 'id' })
db.User.belongsTo(db.Depart, { foreignKey: 'schoolinfo', sourceKey: 'id' })

module.exports = db
