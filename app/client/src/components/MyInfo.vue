<template>
  <div
    class= "top-level-wrapper"
  >
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <header
      class= "upper"
    >
    </header>
    <v-avatar class= "elevation-3" size= "168px"
    >
      <img
        class= "avatar"
        src="../assets/no_user_img_hq.png" alt="avatar">
    </v-avatar>
    <section
      class= "mid elevation-3"
    >
    <div class= "info-box">
      <div>
        <span class= "nickname">{{nickname}}</span>
        <span class= "name">({{name}})</span>
      </div>
      <span class= "email">{{email}}</span>
      <hr class="mt-1 mb-1" align="center" width="20px" color="#f59597" noshade />
      <span class= "school">{{school}}</span>
      <div class= "coll-depart">
        <span class= "college">{{college}}</span>
        <span class= "depart">{{depart}}</span>
      </div>
    </div>
    </section>
    <section
      class= "bottom pr-2 pl-2"
    >
      <interests />
    </section>
  </div>
</template>

<script>
import Interests from '@/components/Interests'

export default {
  data () {
    return {
      nickname: '닉네임',
      name: '이름',
      email: 'example@unitni.com',
      school: '유니티니대학교',
      college: '경상대학',
      depart: '경영학과'
    }
  },
  components: {
    Interests
  }
}
</script>

<style scoped>
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
}
.upper {
  position: relative;
  top: -5px;
  width: 100%;
  height: 115px;
  background-color: #f59597;
}
.v-avatar {
  position: relative;
  top: -80px;
  z-index: 1;
}
.avatar {
  background-color: white;
  border: 3px solid white;
}
.mid {
  position: relative;
  top: -175px;
  z-index: 0;
  width: 100%;
  height: 250px;
  background-color: white;
}
.info-box {
  position: relative;
  top: 105px;
  font-size: 22px;
  color: #6e6e6e;
}
.nickname {
  color: #f59597;
  font-weight: bold;
}
.email {
  font-size: 20px;
}
.school {
  font-weight: 500;
}
.coll-depart {
  font-size: 20px;
}
.bottom {
  position: relative;
  top: -160px;
  height: 100%;
}

</style>
