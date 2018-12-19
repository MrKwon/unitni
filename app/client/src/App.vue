<template>
  <div id="app">
    <!-- <page-header /> -->
    <router-view />
    <!-- <bottom-nav /> -->
  </div>
</template>

<script>
// import PageHeader from '@/components/PageHeader.vue'
// import BottomNav from '@/components/BottomNav.vue'

// export default {
//   name: 'App',
//   components: {
//     'page-header': PageHeader,
//     'bottom-nav': BottomNav
//   }
// }
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

.v-btn__content {
  color: white;
}
</style>
