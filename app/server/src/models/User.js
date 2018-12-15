module.exports = (sequelize, Datatypes) => {
  return sequelize.define('User', {
    email: {
      type: Datatypes.STRING,
      unique: true
    },
    password: Datatypes.STRING
  })
}
