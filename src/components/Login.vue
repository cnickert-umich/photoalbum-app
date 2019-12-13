<template>
  <div class="w-100">
    <div class="form-row pl-4 pr-4">
      <div class="form-group col-lg-5">
        <label for="exampleDropdownFormEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleDropdownFormEmail1"
          placeholder="email@example.com"
          v-model="username"
        />
        {{username}}
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
</template>

<script>
import ApiService from "../services/ApiService";

export default {
  name: "Login",
  data: () => {
    return {
      username: "",
      password: ""
    };
  },
  created: function() {
    let albumsPromise = ApiService.getAllAlbums();
    albumsPromise.done(data => {
      this.albums = data;
    });
  },
  methods: {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
