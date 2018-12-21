const { User, Depart, Sequelize: { Op } } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const { email, password, name, nick, school, college, depart } = req.body
      const schoolinfo = await Depart.findOne({
        attributes: ['id'],
        where: {
          [Op.and]: [ { school: school }, { college: college }, { departs: depart } ]
        }
      })
      const hash = await bcrypt.hash(password, 12)
      const user = await User.create({
        email,
        password: hash,
        name,
        nick,
        school,
        college,
        depart,
        schoolinfo: schoolinfo.dataValues.id
      })
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: '이 이메일 주소는 이미 사용 중 입니다.'
      })
    }
  },

  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: '로그인 정보가 정확하지 않습니다.'
        })
      }

      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: '로그인 정보가 정확하지 않습니다.'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: '로그인을 시도하는 중 오류가 발생하였습니다.'
      })
    }
  }
}
