<template>
  <v-layout row>
    <page-header />
    <v-flex>
      <div class="white elevation-2">
        <v-toolbar flat dense color="#f7a9a9">
          <v-toolbar-title align="center">회원가입</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-4 pb-4">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <form
            name="unitni-form"
            autocomplete="off">
            <v-text-field
              label="이메일"
              color="#f7a9a9"
              v-model="email" />
            <v-text-field
              label="비밀번호"
              type="password"
              color="#f7a9a9"
              v-model="password"
              autocomplete="new-password" />
            <v-text-field
              label="이름"
              color="#f7a9a9"
              v-model="name" />
          </form>
          <br>
          <br>
          <div
            class="error"
            v-html="error" />
          <br>
          <br>
          <v-btn
            round
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
import PageHeader from '@/components/PageHeader.vue'

export default {
  data () {
    return {
      email: '',
      password: '',
      name: '',
      error: null
    }
  },
  components: {
    PageHeader
  },
  methods: {
    async register () {
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password,
          name: this.name
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
    background-color: white !important;
    border-color: yellow !important;
}

.register_btn {
  color: white;
}
</style>
