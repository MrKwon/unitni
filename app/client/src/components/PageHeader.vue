<template>
  <!-- Color RGB = 245 149 151 -->
  <v-toolbar
    flat fixed
    color="#f59597"
    height="55">
    <v-toolbar-title class="toolbar-title-icon">
      <div class= "mt-2"
        @click="navigateTo({ name: 'Index' })">
        <img
          src="../assets/white_logo_resize.png"
          height="33"
          align="center"/>
      </div>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.toolbar-title-icon {
  position: relative;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>
