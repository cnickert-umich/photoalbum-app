<template>
  <div id="app">
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
              <div class="form-row pl-4 pr-4">
                <div class="form-group col-lg-5">
                  <label for="exampleDropdownFormEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleDropdownFormEmail1"
                    placeholder="email@example.com"
                  />
                </div>
                <div class="form-group col-lg-5">
                  <label for="exampleDropdownFormPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleDropdownFormPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group col-lg-2 d-flex align-items-end mb-2">
                  <button type="submit" class="btn btn-primary">Sign In</button>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Signup</a>
            </div>
          </div>
        </div>

        <!-- Collapsible content -->
      </div>
    </nav>
    <!--/.Navbar-->
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
</style>
