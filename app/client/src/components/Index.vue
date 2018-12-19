<template>
  <div class="background">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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
  background-image: url("../assets/background.jpg");
  background-size: 100% 100%
}

.go-main-btn {
  width: 50%;
  position: relative;
  top: 65%;
}

</style>
