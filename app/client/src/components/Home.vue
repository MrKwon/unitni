<template>
  <div class="content">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <home-top v-if="$store.state.isUserLoggedIn"/>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
    <p>HOME</p>
  </div>
</template>

<script>
import PostService from '@/services/PostService'
import HomeTop from '@/components/HomeTop'

export default {
  components: {
    HomeTop
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
</style>
