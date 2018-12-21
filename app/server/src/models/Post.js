module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    topic: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  return Post
}
