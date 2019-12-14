<template>
  <div class="row">
    <div class="col-xs-6 col-md-4 col-lg-3 d-flex align-items-stretch" v-for="album in albums" v-bind:key="album.albumId">
      <router-link :to="'/manage/album/' + album.albumId + '/photos'" class="btn w-100">
        <h4>{{album.name}}</h4>
        <p>ID: #{{album.albumId}}</p>
      </router-link>
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
