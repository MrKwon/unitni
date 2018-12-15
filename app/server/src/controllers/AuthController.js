const { User } = require('../models')

module.exports = {
  async register (req, res) {
    console.log(req.body)
    try {
      const user = await User.create(req.body)
      //   email: req.body.email,
      //   password: req.body.password
      // })
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: '이 이메일 주소는 이미 사용 중 입니다.'
      })
    }
  }
}
