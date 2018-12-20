module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(40),
      allowNull: false, // 필수 입력
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false // 필수 입력
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false // 필수 입력
    },
    nick: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    provider: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'local'
    },
    snsId: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    timestamps: true,
    paranoid: true
  })

  return User
}
