<template>
  <div class= "windows">
    <v-content>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :v-text="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-content>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: '../assets/test.png'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}

</script>

<style scoped>

</style>
