import Api from '@/services/Api'

export default {
  getPosts () {
    return Api().post('getPosts')
  }
}
