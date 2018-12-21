const { Post } = require('../models') // topic, desc, ima

module.exports = {
  async getPost (req, res) {
    try {
      const { email } = req.body
      const tmplist = await Post.findAll()
      const listJson = tmplist.toJSON()
      res.send({
        list: listJson,
        message: `${email} 요청이 들어옴`
      })
    } catch (err) {
      console.log(err)
    }
  }
}
