<template>
  <div class="container elevation-3 pt-0 pl-0 pr-0">
    <div class="title pt-3 pb-3 pl-3 pr-3">
      <span class= "nickname">{{nickname}}</span>
      <span>님의 현재 관심사</span>
    </div>
    <div class="mt-3">
      <v-chip disabled color="blue" text-color="white">여행</v-chip>
      <v-chip disabled color="black" text-color="white">취업</v-chip>
      <v-chip disabled color="red" text-color="white">학식</v-chip>
      <v-chip disabled color="green" text-color="white">교환학생</v-chip>
      <v-chip disabled color="orange" text-color="white">인생</v-chip>
      <v-chip disabled color="yellow" text-color="black">경영학과</v-chip>
      <v-chip disabled color="cyan" text-color="black">마케팅</v-chip>
      <v-chip disabled color="purple" text-color="white">재무</v-chip>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickname: '닉네임'
    }
  }
}
</script>

<style scoped>
.container {
  /* border: 1px solid black; */
  border-radius: 15px
}
.title {
  position: relative;
  width: 100%;
  height: 50px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: beige;
  text-align: left;
}
.nickname {
  color: #f59597;
  font-weight: bold;
}
</style>
