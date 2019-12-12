<template>
  <div id="app" class="container">
    <Albums/>
    <Photos albumId="1"/>
  </div>
</template>

<script>
import Albums from './components/Albums.vue'
import Photos from './components/Photos.vue'

export default {
  name: 'app',
  components: {
    Albums,
    Photos
  }
}
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
</style>
