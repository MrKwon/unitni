<template>
  <div>
    <div>
      <div v-if="selected === 'myinfo'">
        <my-info />
      </div>
      <div v-else-if="selected === 'home'">
        <home />
      </div>
      <div v-else-if="selected === 'favorites'">
        <favorites />
      </div>
    </div>
    <v-bottom-nav
      :active.sync="selected"
      :value="true"
      fixed
      color="#f59597"
      height="55"
    >
      <v-btn
        color="white"
        flat
        value="myinfo"
      >
        <img
          src="../assets/icon_my.png"
          height="30" />
      </v-btn>
      <v-btn
        color="white"
        flat
        value="home"
        >
        <img
          src="../assets/icon_home.png"
          height="30"
        />
      </v-btn>
      <v-btn
        color="white"
        flat
        value="favorites"
        >
        <img
          src="../assets/icon_white_star.png"
          height="30" />
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import MyInfo from '@/components/MyInfo'
import Home from '@/components/Home'
import Favorites from '@/components/Favorites'

export default {
  data () {
    return {
      selected: 'home'
    }
  },
  components: {
    MyInfo,
    Home,
    Favorites
  }
}
</script>

<style scoped>

</style>
