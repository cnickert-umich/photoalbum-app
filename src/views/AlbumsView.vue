<template>
  <div class="albums_all container pt-4">
    <div class="row text-center">
      <div class="col">
        <h2>My Albums</h2>
      </div>
    </div>
    <Albums />
    <div
      class="w-100 fixed-bottom d-flex justify-content-end justify-content-md-center d-block d-md-none"
    >
      <router-link to="/albums/new">
        <button class="btn btn-primary rounded-circle p-3 m-4" style="height:60px; width: 60px;">
          <i class="fas fa-plus fa-lg"></i>
        </button>
      </router-link>
    </div>

    <div class="row d-none d-md-flex justify-content-end">
      <router-link to="/albums/new">
        <button class="btn btn-primary">
          New
          <i class="fas fa-plus ml-2"></i>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Albums from "@/components/Albums.vue";

export default {
  name: "albums_view",
  components: {
    Albums
  }
};
</script>
