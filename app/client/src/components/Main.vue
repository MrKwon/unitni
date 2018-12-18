<template>
  <div class="main">
    <page-header></page-header>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue'
import PageHeader from '@/components/PageHeader.vue'

new Vue({
  el: '#main',
  components: {
    'bottom-nav': BottomNav,
    'page-header': PageHeader
  }
})

export default {
  data () {
  }
}
</script>

<style scoped>

</style>
