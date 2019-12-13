<template>
  <div class="upload_no_album">
    <h2>Upload Images</h2>
    <div class="form-group">
      <label for="selectAlbum">Album Name</label>
      <select id="selectAlbum" v-model="selectedAlbumId" class="browser-default custom-select">
        <option
          v-for="album in albumList"
          v-bind:value="album.albumId"
          v-bind:key="album.albumId"
        >{{album.name}} ({{album.albumId}})</option>
      </select>
    </div>
    <Upload v-bind:selectedAlbumId="selectedAlbumId"></Upload>
  </div>
</template>

<script>
// @ is an alias to /src
import Upload from "@/components/Upload.vue";
import ApiService from "../services/ApiService";

export default {
  name: "upload_view",
  components: {
    Upload
  },
  data: () => {
    return {
      selectedAlbumId: -1,
      albumList: []
    };
  },
  created: function() {
    let albumsPromise = ApiService.getAllAlbums();
    albumsPromise.then(data => {
      this.albumList = data;
    });
  },
  methods: {},
  computer: {}
};
</script>
