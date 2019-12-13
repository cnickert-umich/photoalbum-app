<template>
  <!--Navbar-->
  <nav
    id="nav"
    class="navbar navbar-expand-lg navbar-dark primary-color sticky-top scrolling-navbar"
  >
    <div class="container">
      <!-- Navbar brand -->

      <router-link to="/" class="navbar-brand text-center mr-5 nav-item">
        <span>Phortal</span>
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
        <div class="nav-item dropdown mr-2 ml-2">
          <button
            class="btn btn-light dropdown-toggle btn-block"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            MANAGE
            <i class="fas fa-hammer pl-2"></i>
          </button>

          <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
            <h6 class="dropdown-header">Album</h6>
            <router-link to="/albums" class="dropdown-item">
              <i class="fas fa-folder-open pr-2"></i>View All
            </router-link>
            <router-link to="/albums/new" class="dropdown-item">
              <i class="fas fa-folder-plus pr-2"></i>New
            </router-link>

            <h6 class="dropdown-header">Photos</h6>
            <router-link to="/upload" class="dropdown-item">
              <i class="fas fa-cloud-upload-alt pr-2"></i>Upload
            </router-link>
          </div>
        </div>

        <div class="mr-2 ml-2">
          <button
            class="btn btn-primary dropdown-toggle btn-block"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ACCOUNT
            <i class="fas fa-user pl-2"></i>
          </button>

          <div class="dropdown-menu w-100">
            <Login></Login>
          </div>
        </div>
      </div>

      <!-- Collapsible content -->
    </div>
  </nav>
  <!--/.Navbar-->
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "navigation",
  components: {
    Login
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
