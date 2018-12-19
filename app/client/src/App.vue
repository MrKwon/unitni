<template>
  <div id="app">
    <router-view />
    <!-- <v-app>
      <v-content>
        <v-container>
          <router-view />
        </v-container>
      </v-content>
    </v-app> -->
  </div>
</template>

<script>
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
