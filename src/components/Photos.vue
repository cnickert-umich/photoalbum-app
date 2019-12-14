<template>
  <div>
    <div class="row">
      <div class="col-xs-6 col-md-4 col-lg-3 mb-2" v-for="photoId in photos" v-bind:key="photoId">
        <a v-bind:href="generatePhotoUrl(photoId)" target="_blank">
          <img
            v-bind:src="generatePhotoUrl(photoId)"
            class="img-fluid img-thumbnail"
            alt="loading photo"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";

export default {
  name: "Photos",
  props: { albumId: Number },
  data: () => {
    return {
      photos: []
    };
  },
  created: function() {
    let photosPromise = ApiService.getPhotos(this.albumId);
    photosPromise.done(data => {
      this.photos = data;
    });
  },
  methods: {
    generatePhotoUrl: function(photoId) {
      return ApiService.getPhotoUrl(photoId);
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
