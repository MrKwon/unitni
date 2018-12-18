<template>
  <v-card height="100%" flat>
    <div class="headline text-xs-center pa-5">
      Active: {{ bottomNav }}
    </div>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      fixed
      color="#f59597"
      height="55">

      <v-btn
        color="white"
        flat
        value="recen">
        <!-- <span>Recent</span> -->
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="favorites">
        <!-- <span>Favorites</span> -->
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="nearby">
        <!-- <span>Nearby</span> -->
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>

<style scoped>

</style>
