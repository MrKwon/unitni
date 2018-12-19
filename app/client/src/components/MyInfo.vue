<template>
  <div>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <p>MyInfo</p>
    <v-app>
      <v-content>
        <v-container>
          <v-btn
            to="login"
            color="success"
          >
            로그인 하기
          </v-btn>
          <br>
          <v-btn
            to="register"
            color="error"
          >
            회원가입 하기
          </v-btn>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
