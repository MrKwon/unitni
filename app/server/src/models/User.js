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
      allowNull: false // 필수 입력이지만 입력 안하면 이름이 자동으로 들어감
    },
    school: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    college: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    depart: {
      type: DataTypes.STRING(20),
      allowNull: false
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
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  return User
}
