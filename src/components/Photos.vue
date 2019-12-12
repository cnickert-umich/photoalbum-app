<template>
  <div>
        <h2>My Photos</h2>
        <p>Album #{{this.albumId}}</p>
        <div class="row">
    <div class="col-xs-6 col-md-4 col-lg-3" v-for="photoId in photos" v-bind:key="photoId">
      <button class="btn w-100">
        <p>ID: #{{photoId}}</p>
      </button>
    </div>
        </div>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";

export default {
  name: "Photos",
  props: {
    albumId: String
  },
  data: () => {
    return {
      photos: []
    };
  },
  created: function() {
    let photosPromise = ApiService.getPhotos("1");
    photosPromise.done(data => {
      this.photos = data;
    });
  },
  methods: {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
