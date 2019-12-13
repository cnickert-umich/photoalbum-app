<template>
  <div class="album_details">
    <div v-if="selectedAlbumId>-1">
      <Photos v-bind:albumId="selectedAlbumId" />
      <Upload v-bind:selectedAlbumId="selectedAlbumId" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Photos from "@/components/Photos.vue";
import Upload from "@/components/Upload.vue";

export default {
  name: "albums_view",
  components: {
    Photos,
    Upload
  },
  data: () => {
    return { selectedAlbumId: -1 };
  },
  mounted() {
    this.selectedAlbumId = parseInt(this.$route.params.id);
  },
  created: {}
};
</script>
