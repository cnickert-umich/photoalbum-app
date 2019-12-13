<template>
  <div v-if="selectedAlbumId>=0">
    <div class="form-group">
      <label for="selectPhotos">Add Images</label>
      <input
        id="selectPhotos"
        type="file"
        multiple
        v-on:change="onFileChange"
        class="btn w-100 d-flex justify-content-center text-center"
      />
      <div class="ml-4 mr-4">
        <small>{{generateFilenames}}</small>
      </div>
    </div>

    <div v-if="images.length>0" class="text-center">
      <button v-on:click="uploadPhotosToAlbum" class="btn btn-info mb-3">
        Upload Photo(s)
        <i class="fas fa-cloud-upload-alt fa-lg pl-2"></i>
      </button>
      <div class="card text-center">
        <nav aria-label="Page navigation">
          <ul class="pagination pg-blue d-flex justify-content-center text-center pt-2 m-0">
            <li class="page-item">
              <a class="page-link" v-on:click="prevPreview">
                <i class="fas fa-caret-left"></i>
              </a>
            </li>
            <li class="page-item pt-1 pl-1 pr-1">{{generateThumbnailIndex}}</li>

            <li class="page-item">
              <a class="page-link" v-on:click="nextPreview">
                <i class="fas fa-caret-right"></i>
              </a>
            </li>
          </ul>
        </nav>

        <p>{{generateThumbnailName}}</p>

        <div class="row d-flex justify-content-center pl-4 pr-4 pb-2">
          <img v-bind:src="generateThumbnail" class="img-fluid img-thumbnail" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";

export default {
  name: "Upload",
  props: {
    selectedAlbumId: Number
  },
  data: () => {
    return {
      displayImageIndex: 0,
      images: []
    };
  },
  created: {},
  methods: {
    onFileChange: function(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.images = files;
      this.displayImageIndex = 0;
      console.log("", files);
    },
    nextPreview: function() {
      let newIndex = this.displayImageIndex + 1;
      if (newIndex >= this.images.length) {
        newIndex = 0;
      }
      this.displayImageIndex = newIndex;
    },
    prevPreview: function() {
      let newIndex = this.displayImageIndex - 1;
      if (newIndex < 0) {
        newIndex = this.images.length - 1;
      }
      this.displayImageIndex = newIndex;
    },
    uploadPhotosToAlbum: function(e) {
      let imagePromises = [];
      for (let i = 0; i < this.images.length; i++) {
        let imageFile = this.images[i];
        let imagePromise = ApiService.uploadPhoto(
          this.selectedAlbumId,
          imageFile
        ); //
        imagePromises.push(imagePromise);
      }
      console.log(e);

      Promise.all(imagePromises).then(() => {
        this.$router.push("/album/" + this.selectedAlbumId + "/photos");
        this.$router.go(this.$router.currentRoute);
      });
    }
  },
  computed: {
    generateThumbnail: function() {
      return URL.createObjectURL(this.images[this.displayImageIndex]);
    },
    generateThumbnailName: function() {
      return this.images[this.displayImageIndex].name;
    },
    generateThumbnailIndex: function() {
      return this.displayImageIndex + 1 + " of " + this.images.length;
    },
    generateFilenames: function() {
      if (!this.images || this.images.length <= 0) {
        return "";
      } else if (this.images.length == 1) {
        return this.images[0].name;
      }

      let imageNames = "";
      let i = 0;
      for (i = 0; i < this.images.length - 1; i++) {
        imageNames += this.images[i].name + ", ";
      }
      return imageNames + "and " + this.images[i].name + ".";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
