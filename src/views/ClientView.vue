<template>
  <div class="client">
    <div v-if="albumId">
      <!-- Main navigation -->
      <header>
        <!-- Full Page Intro -->
        <div id="intro-section" class="view">
          <video
            class="video-intro"
            poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
            playsinline
            autoplay
            muted
            loop
          >
            <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4" />
          </video>

          <!-- Mask & flexbox options-->
          <div class="mask rgba-gradient d-flex justify-content-center align-items-stretch">
            <!-- Content -->
            <div class="container px-md-3 px-sm-0">
              <!--Grid row-->
              <div class="row wow fadeIn">
                <!--Grid column-->
                <div class="col-md-12 mb-4 pt-5 white-text text-center wow fadeIn">
                  <h3 class="display-3 font-weight-bold white-text mb-0">{{albumName}}</h3>
                  <hr class="hr-light my-4 w-75" />
                  <Photos v-bind:albumId="albumId" />
                </div>
                <!--Grid column-->
              </div>
              <!--Grid row-->
            </div>
            <!-- Content -->
          </div>
          <!-- Mask & flexbox options-->
        </div>
        <!-- Full Page Intro -->
      </header>
      <!-- Main navigation -->
    </div>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";
import Photos from "../components/Photos";

export default {
  name: "ClientView",
  components: {
    Photos
  },
  data: () => {
    return {
      albumId: null,
      albumName: ""
    };
  },
  created: function() {
    let encodedId = this.$route.query.id;
    if (encodedId) {
      this.albumId = parseInt(atob(atob(atob(atob(atob(encodedId))))));
      let albumDetailsPromise = ApiService.getAlbumById(this.albumId);
      albumDetailsPromise.then(data => {
        this.albumName = data.name;
      });
    }
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
html,
body,
header,
.view {
  height: 100%;
}

@media (max-width: 740px) {
  html,
  body,
  header,
  .view {
    height: 100vh;
  }
}

.top-nav-collapse {
  background-color: #563e91 !important;
}

.navbar:not(.top-nav-collapse) {
  background: transparent !important;
}

@media (max-width: 991px) {
  .navbar:not(.top-nav-collapse) {
    background: #563e91 !important;
  }
}

.rgba-gradient {
  background: linear-gradient(
    45deg,
    rgba(213, 15, 61, 0.6),
    rgba(13, 17, 198, 0.69) 100%
  );
}
</style>>