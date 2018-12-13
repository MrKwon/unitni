module.exports = (sequelize, Datatypes) => {
  sequelize.define('User', {
    email: {
      type: Datatypes.STRING,
      unique: true
    },
    password: Datatypes.STRING
  })
}
