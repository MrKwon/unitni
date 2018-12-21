<template>
  <!-- Color RGB = 245 149 151 -->
  <v-toolbar
    flat fixed
    color="#f59597"
    height="55">
    <v-toolbar-title class="toolbar-title-icon">
      <div class= "mt-2">
        <img
          src="../assets/white_logo_resize.png"
          height="33"/>
      </div>
    </v-toolbar-title>
    <img
      class="logout"
      src="../assets/no_user_img_white.png"
      height="33"
      width="33"
      align="right"
      v-if= "$store.state.isUserLoggedIn"
      @click="logout()"/>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    goBack () {
      history.go(-1)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO : redirect to homepage
      this.$router.push('main')
    }
  }
}
</script>

<style scoped>
.toolbar-title-icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.goback {
  position: absolute;
  left: 0px;
  margin-left: 16px
}
.login {
  position: absolute;
  right: 0px;
  margin-right: 16px
}
.logout {
  position: absolute;
  right: 0px;
  margin-right: 16px
}
</style>
