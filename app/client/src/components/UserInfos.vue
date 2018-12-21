<template>
  <div class= "info-box">
    <div>
      <span class= "nickname">{{nickname}}</span>
      <span class= "name">({{name}})</span>
    </div>
    <span class= "email">{{email}}</span>
    <hr class="mt-1 mb-1" align="center" width="20px" color="#f59597" noshade />
    <span class= "school">{{school}}</span>
    <div class= "coll-depart">
      <span class= "college">{{college}}대학</span>
      <span class= "depart">{{depart}}과</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickname: this.$store.state.user.nick,
      name: this.$store.state.user.name,
      email: this.$store.state.user.email,
      school: this.$store.state.user.school,
      college: this.$store.state.user.college,
      depart: this.$store.state.user.depart
    }
  }
}
</script>

<style scoped>
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
</style>
