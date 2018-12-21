<template>
  <div class="background">
    <img
      class="main-logo"
      src="../assets/unitnilogo.png">
    <br>
    <v-btn
      round
      to='main'
      class="go-main-btn"
      color="#f59597">
      시작하기
    </v-btn>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.v-btn__content {
  color: white;
}

.main-logo {
  width: 150px;
  height: 150px;
  position: relative;
  top: 35%
}

.go-main-btn {
  width: 50%;
  position: relative;
  top: 45%;
}

</style>
