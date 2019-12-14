<template>
  <header>
    <div class="view full-page-intro aqua-gradient">
      <div class="mask d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row d-flex h-100 justify-content-center align-items-center">
            <div class="col-md-6 mb-4 white-text text-center text-md-left">
              <h1
                class="h1-responsive font-courier-prime-code"
              >Photography Manager That Works at Every Angle</h1>

              <hr class="hr-light" />

              <p class="pb-4">
                <strong>Mange your photos through our portal. Upload, store, and view from anywhere.</strong>
              </p>

              <router-link to="/manage/signup">
                <button type="button" class="btn btn-outline-light">Signup</button>
              </router-link>
              <router-link to="/manage/login">
                <button type="button" class="btn btn-info">Login</button>
              </router-link>
              <p>Are you new? Signup for free!</p>
            </div>

            <div class="col-md-6 col-xl-5 mb-4">
              <img src="../assets/display.jpg" alt class="img-fluid img-thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
</script>

<style>
.view,
body,
html {
  height: 100%;
}
@media (max-width: 740px) {
  .full-page-intro {
    height: 1000px;
  }
}
.carousel {
  height: 50%;
}
.carousel .carousel-inner,
.carousel .carousel-inner .active,
.carousel .carousel-inner .carousel-item {
  height: 100%;
}
@media (max-width: 776px) {
  .carousel {
    height: 100%;
  }
}
.navbar {
  background-color: rgba(0, 0, 0, 0.2);
}
.page-footer,
.top-nav-collapse {
  background-color: #1c2331;
}
@media only screen and (max-width: 768px) {
  .navbar {
    background-color: #1c2331;
  }
}

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
    height: 1050px;
  }
}

@media (min-width: 800px) and (max-width: 850px) {
  html,
  body,
  header,
  .view {
    height: 700px;
  }
}
</style>>
