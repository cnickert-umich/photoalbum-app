<template>
  <div>
    <h2>My Albums</h2>
    <div
      class="w-100 fixed-bottom d-flex justify-content-end justify-content-md-center d-block d-md-none"
    >
      <button class="btn btn-primary rounded-circle p-3 m-4" style="height:60px; width: 60px;">
        <i class="fas fa-plus fa-lg"></i>
      </button>
    </div>
    <button class="btn btn-primary d-none d-md-block">
      New
      <i class="fas fa-plus ml-2"></i>
    </button>
    <div class="row">
      <div class="col-xs-6 col-md-4 col-lg-3" v-for="album in albums" v-bind:key="album.albumId">
        <button class="btn w-100">
          <h4>{{album.name}}</h4>
          <p>ID: #{{album.albumId}}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";

export default {
  name: "Albums",
  data: () => {
    return {
      albums: []
    };
  },
  created: function() {
    let albumsPromise = ApiService.getAllAlbums();
    albumsPromise.done(data => {
      this.albums = data;
    });
  },
  methods: {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
