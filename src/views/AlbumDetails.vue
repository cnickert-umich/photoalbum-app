<template>
  <div class="album_details container pt-4">
    <div v-if="selectedAlbumId>-1">
      <h4>{{albumName}}</h4>
      <Photos v-bind:albumId="selectedAlbumId" />
      <Upload v-bind:selectedAlbumId="selectedAlbumId" />

      <div class="form-group mb-4">
        <label for="albumUrl">Share</label>
        <input id="albumUrl" class="form-control form-control-sm" :value="url" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Photos from "@/components/Photos.vue";
import Upload from "@/components/Upload.vue";
import ApiService from "../services/ApiService";

export default {
  name: "albums_view",
  components: {
    Photos,
    Upload
  },
  data: () => {
    return { selectedAlbumId: -1, albumName: "" };
  },
  created: function() {
    this.selectedAlbumId = parseInt(this.$route.params.id);
    let albumDetailsPromise = ApiService.getAlbumById(this.selectedAlbumId);
    albumDetailsPromise.then(data => {
      this.albumName = data.name;
    });
  },
  computed: {
    url: function() {
      return window.location.origin + "?id=" + btoa(btoa(btoa(btoa(btoa(this.selectedAlbumId)))));
    }
  }
};
</script>
