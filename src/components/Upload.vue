<template>
  <div>
    <input type="file" multiple v-on:change="onFileChange" />

    <button v-on:click="uploadPhotosToAlbum" class="btn btn-info">Upload</button>

    <div class="card">
      <div class="row d-flex justify-content-center">
        <h6 class="mt-2">Preview</h6>
      </div>
      <div class="row d-flex justify-content-center pl-4 pr-4 pb-2">
        <img v-bind:src="displayImage" class="img-fluid img-thumbnail" />
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";

export default {
  name: "Upload",
  data: () => {
    return {
      displayImage: "",
      images: []
    };
  },
  created: {},
  methods: {
    onFileChange: function(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.displayImage = URL.createObjectURL(files[0]);
      this.images = files;
      console.log("", files);
    },
    uploadPhotosToAlbum: function(e) {
      let imagePromises = [];
      for (let i = 0; i < this.images.length; i++) {
        let imageFile = this.images[i];
        let imagePromise = ApiService.uploadPhoto(1, imageFile); //
        imagePromises.push(imagePromise);
      }
      console.log("mmmk", e);
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
