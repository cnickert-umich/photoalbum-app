<template>
  <!--Navbar-->
  <nav
    id="nav"
    v-if="$route.path!='/'"
    class="navbar navbar-expand-lg navbar-dark info-color sticky-top scrolling-navbar"
  >
    <div class="container">
      <!-- Navbar brand -->

      <router-link to="/manage" class="navbar-brand text-center mr-5 nav-item">
        <span>Photortal</span>
        <i class="fas fa-camera-retro fa-lg pl-2"></i>
      </router-link>

      <!-- Collapse button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#basicExampleNav"
        aria-controls="basicExampleNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible content -->
      <div class="collapse navbar-collapse" id="basicExampleNav">
        <!-- Links -->
        <ul class="navbar-nav mr-auto">
          <!-- <router-link to="/" class="nav-item">
              <span class="nav-link"><i class="fas fa-home pr-2"></i>Home</span>
          </router-link>-->
        </ul>
        <!-- Links -->

        <!-- Dropdown -->
        <div v-if="authenticated" class="nav-item dropdown mr-2 ml-2">
          <button
            class="btn btn-outline-light dropdown-toggle btn-block"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            MANAGE
            <i class="fas fa-hammer pl-2"></i>
          </button>

          <div class="dropdown-menu dropdown-info" aria-labelledby="navbarDropdownMenuLink">
            <h6 class="dropdown-header">Album</h6>
            <router-link to="/manage/albums" class="dropdown-item">
              <i class="fas fa-folder-open pr-2"></i>View All
            </router-link>
            <router-link to="/manage/albums/new" class="dropdown-item">
              <i class="fas fa-folder-plus pr-2"></i>New
            </router-link>

            <h6 class="dropdown-header">Photos</h6>
            <router-link to="/manage/upload" class="dropdown-item">
              <i class="fas fa-cloud-upload-alt pr-2"></i>Upload
            </router-link>
          </div>
        </div>

        <!-- Dropdown -->
        <div v-if="authenticated" class="nav-item dropdown mr-2 ml-2">
          <button
            class="btn btn-info dropdown-toggle btn-block"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{userename}}
            <i class="fas fa-user pl-2"></i>
          </button>

          <div class="dropdown-menu dropdown-info" aria-labelledby="navbarDropdownMenuLink">
            <h6 class="dropdown-header">Account</h6>
            <a v-on:click="logout" class="dropdown-item">
              <i class="fas fa-sign-out-alt pr-2"></i>Logout
            </a>
          </div>
        </div>
        <div v-else>
          <router-link to="/manage/signup">
            <button type="button" class="btn btn-outline-light">Signup</button>
          </router-link>
          <router-link to="/manage/login">
            <button type="button" class="btn btn-info">Login</button>
          </router-link>
        </div>
      </div>
      <!-- Collapsible content -->
    </div>
  </nav>
  <!--/.Navbar-->
</template>

<script>
import LoginService from "../services/LoginService";

export default {
  name: "navigation",
  data: () => {
    return { authenticated: false, userename: "" };
  },
  components: {},
  created: function() {
    this.checkAuthentication();
  },
  watch: {
    $route() {
      this.checkAuthentication();
    }
  },
  methods: {
    logout: function() {
      LoginService.stashAuthToken(null);
      this.$router.push("/manage/login");
    },
    checkAuthentication: function() {
      let authToken = LoginService.getAuthToken();
      if (authToken) {
        let claims = LoginService.getAuthTokenClaims(authToken);

        this.userename = claims.sub;
        this.authenticated = true;
        let path = this.$route.path;
        if (path == "/manage/login" || path == "/manage/signup") {
          this.$router.push("/manage");
        }
      } else {
        this.authenticated = false;
        let path = this.$route.path;
        if (
          path != "/manage/login" &&
          path != "/manage/signup" &&
          path != "/manage" &&
          path != "/"
        ) {
          this.$router.push("/manage/login");
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
