<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Albums/>
  </div>
</template>

<script>
// @ is an alias to /src
import Albums from '@/components/Albums.vue'

export default {
  name: 'home',
  components: {
    Albums
  }
}
</script>
