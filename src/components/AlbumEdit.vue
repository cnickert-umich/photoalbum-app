<template>
  <div class="albums_edit container pt-4">
    <div class="form-group">
      <label for="albumNameEdit">Album Name</label>
      <input
        type="text"
        class="form-control"
        id="albumNameEdit"
        placeholder="Name Your Album"
        v-model="albumName"
      />
    </div>
    <button
      class="btn btn-success"
      v-bind:class="{ disabled: albumName.length <= 0 }"
      v-on:click="createAlbum"
    >
      Save {{albumName}} Album
      <i class="fas fa-save pl-2 fa-lg"></i>
    </button>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";

export default {
  name: "AlbumEdit",
  data: () => {
    return {
      albumName: ""
    };
  },
  created: {},
  methods: {
    createAlbum: function() {
      let albumsPromise = ApiService.createAlbum(this.albumName);
      albumsPromise.done(data => {
        this.$router.push("/manage/album/" + data.albumId + "/photos");
        this.$router.go(this.$router.currentRoute);
      });
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
