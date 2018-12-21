<template>
  <v-layout row>
    <page-header />
    <v-flex>
      <div class="background">
        <img
          class="main-logo"
          src="../assets/unitnilogo.png">
        <div class="login pl-4 pr-4 pt-4 pb-4">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <v-text-field
            label="이메일"
            color="#f7a9a9"
            v-model="email" />
          <v-text-field
            label="비밀번호"
            type="password"
            color="#f7a9a9"
            v-model="password" />
          <div
            class="error"
            v-html="error" />
          <br>
          <v-btn
            round
            large
            class="register_btn"
            color="#f7a9a9"
            to= 'register'>
            회원가입
          </v-btn>
          <v-btn
            round
            large
            class="register_btn"
            color="#f7a9a9"
            @click="login">
            로그인
          </v-btn>
          <br>
          <br>
          <br>
          <div
            class="login-btns" >
            <img
              class="kakao-login mb-2"
              src="../assets/kakao.png"/>
            <img
              class="naver-login mb-2"
              src="../assets/naver.png"/>
            <img
              class="fb-login"
              src="../assets/facebook.png"/>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService'
import PageHeader from '@/components/PageHeader.vue'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    PageHeader
  },
  methods: {
    async login () {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('main')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.background {
  max-width: 100%;
  max-height: 100%;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  background-image: url("../assets/background.png");
  background-size: 100% 100%
}

.main-logo {
  width: 125px;
  height: 125px;
  position: relative;
  top: 100px;
}

.login {
  position: relative;
  top: 100px;
}

.error {
  color: red;
  background-color: #f7a9a9 !important;
  border-color: yellow !important;
  border-radius: 5px;
}

.register_btn {
  color: white;
}

.kakao-login {
  width: 250px;
  border-radius: 5px;
}

.naver-login {
  width: 250px;
  border-radius: 5px;
}

.fb-login {
  width: 250px;
  border-radius: 5px;
}
</style>
