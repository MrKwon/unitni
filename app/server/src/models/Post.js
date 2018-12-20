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
    paranoid: true
  })

  return Post
}
