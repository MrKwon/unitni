<template>
  <div class="content pt-2 pb-2 pr-3 pl-3">
    <div v-html="lists"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 구현 필요함, 로그인한 아이디 정보에 맞는 정보 출력
      lists: `
      <li>CEOS DEMO DAY</li>
      <li>유니티니 기획, 개발, 디자인</li>
      <li>CEOS 8기 화이팅</li>
      `
    }
  }
}
</script>력

<style scoped>
.content {
  position: relative;
  top: -5px;
  border-bottom: 1px solid #f59597;
  background-color: #fae1e3;
  text-align: left;
}
</style>
