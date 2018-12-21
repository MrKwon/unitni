<template>
  <v-layout column class= "info-box">
    <div class="mb-3">
    <span class>로그인을 하면</span>
    <br>
    <span class>더 많은 맞춤 정보를 확인할 수 있어요.</span>
    </div>
    <v-content>
      <v-btn
        round
        color="#f59597"
        to="register"
      >
        회원가입
      </v-btn>
      <v-btn
        round
        color="#f59597"
        to="login"
      >
        로그인
      </v-btn>
    </v-content>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style scoped>
.info-box {
  position: relative;
  top: 120px;
  font-size: 20px;
  color: #6e6e6e;
}
</style>
