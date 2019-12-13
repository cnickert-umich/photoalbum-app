<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="container pt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>

<style>
</style>
