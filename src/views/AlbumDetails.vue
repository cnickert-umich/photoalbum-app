<template>
  <div class="album_details container pt-4">
    <div v-if="selectedAlbumId>-1">
      <h4>{{albumName}}</h4>
      <Photos v-bind:albumId="selectedAlbumId" />
      <Upload v-bind:selectedAlbumId="selectedAlbumId" />
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
  mounted() {
    this.selectedAlbumId = parseInt(this.$route.params.id);
  },
  created: function() {
    let albumDetailsPromise = ApiService.getAlbumById(this.albumId);
    albumDetailsPromise.then(data => {
      this.albumName = data.name;
    });
  }
};
</script>
