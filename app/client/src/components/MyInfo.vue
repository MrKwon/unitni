<template>
  <div
    class= "top-level-wrapper"
  >
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <header
      class= "upper"
    >
    </header>
    <v-avatar class= "elevation-3" size= "168px"
    >
      <img
        class= "avatar"
        src="../assets/no_user_img_hq.png"
        alt="avatar">
    </v-avatar>
    <section
      class= "mid elevation-3"
    >
      <need-login v-if="!$store.state.isUserLoggedIn"/>
      <user-infos v-if="$store.state.isUserLoggedIn"/>
    </section>
    <section
      class= "bottom pr-2 pl-2"
    >
      <interests v-if="$store.state.isUserLoggedIn"/>
    </section>
  </div>
</template>

<script>
import Interests from '@/components/Interests'
import UserInfos from '@/components/UserInfos'
import NeedLogin from '@/components/NeedLogin'

export default {
  components: {
    Interests,
    UserInfos,
    NeedLogin
  }
}
</script>

<style scoped>
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
}
.upper {
  position: relative;
  top: -5px;
  width: 100%;
  height: 115px;
  background-color: #f59597;
}
.v-avatar {
  position: relative;
  top: -80px;
  z-index: 1;
}
.avatar {
  background-color: white;
  border: 3px solid white;
}
.mid {
  position: relative;
  top: -175px;
  z-index: 0;
  width: 100%;
  height: 250px;
  background-color: white;
}
.bottom {
  position: relative;
  top: -160px;
  height: 100%;
}

</style>
