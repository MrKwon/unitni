const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    console.log(req.body.email, req.body.password)
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      name: Joi.string().min(2).max(10)
    }

    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          if (!req.body.email || !req.body.password) {
            res.status(400).send({
              error: '가입을 위해 비어있는 칸을 모두 채워주세요.'
            })
          } else {
            res.status(400).send({
              error: '유효한 이메일 주소의 형식이 아닙니다.'
            })
          }
          break
        case 'password':
          res.status(400).send({
            error: `비밀번호는 다음의 규칙들을 따라야합니다.
              <br>
              1. 비밀번호는 영어 대소문자, 숫자만을 포함할 수 있습니다.
              <br>
              2. 비밀번호는 최소 8문자, 최대 32문자로 설정할 수 있습니다.
            `
          })
          break
        case 'name':
          res.status(400).send({
            error: '이름을 정확히 입력해주세요.'
          })
          break
        default:
          res.status(400).send({
            error: '회원가입 중 에러 발생 [errorCode : 400]'
          })
      }
    } else {
      console.log(value)
      next()
    }
  }
}
