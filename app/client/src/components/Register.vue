<template>
  <v-layout row>
    <v-flex>
      <div class="white elevation-2">
        <v-toolbar flat dense color="#f7a9a9">
          <v-toolbar-title>회원가입</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <v-text-field
            label="이메일"
            color="#f7a9a9"
            v-model="email" />
          <v-text-field
            label="비밀번호"
            color="#f7a9a9"
            v-model="password" />
          <br>
          <br>
          <div
            class="error"
            v-html="error" />
          <br>
          <br>
          <v-btn
            class="register_btn"
            color="#f7a9a9"
            @click="register">
            회원가입
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        console.log(this.email)
        console.log(this.password)
        await AuthService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}

.register_btn {
  color: white;
}
</style>
