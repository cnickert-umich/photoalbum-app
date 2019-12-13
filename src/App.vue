<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view />
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
html,
body,
#app {
  height: 100%;
}
</style>
