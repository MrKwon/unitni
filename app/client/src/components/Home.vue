<template>
  <v-layout column fixed>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <header>
      <home-top v-if="$store.state.isUserLoggedIn"/>
    </header>
    <section class="middle">
      <home-list-cards />
    </section>
  </v-layout>
</template>

<script>
import PostService from '@/services/PostService'
import HomeTop from '@/components/HomeTop'
import HomeListCards from '@/components/HomeListCards'

export default {
  components: {
    HomeTop,
    HomeListCards
  },
  methods: {
    async getPost () {
      try {
        const response = await PostService.getPost({
          email: this.$store.state.user.email
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.content::-webkit-scrollbar {
  display: none;
}

.content {
  position: relative;
}

.middle {
  position: relative;
}
</style>
