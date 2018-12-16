<template>
  <div id="app">
    <!-- <page-header/> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
// import PageHeader from '@/components/Header.vue'
export default {
  name: 'App'
  // components: {
  //   PageHeader
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-toolbar__title {
  color: white;
}

.v-input__slot {
  border-bottom: 1px solid #f7a9a9;
}
</style>
