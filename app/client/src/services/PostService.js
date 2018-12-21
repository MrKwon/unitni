import Api from '@/services/Api'

export default {
  getPosts (posts) { // posts 는 가져올 post에 대한 정보, Home에 DB에 있는 Posts 들을 가져오기 위한 메서드
    return Api().post('getPosts', posts)
  },
  getFavorites (posts) {
    return Api().post('getFavorites', posts)
  }
}
