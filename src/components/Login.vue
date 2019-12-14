<template>
  <div class="login text-center pt-4">
    <!-- Default form login -->
    <div class="row justify-content-center">
      <form class="text-center border border-light p-5 col-md-6 col-lg-5" action="#!">
        <p class="h4 mb-4">Account Login</p>

        <div class="alert alert-success" v-if="showRegisterSuccess" role="alert">
          <p class="mb-0">Success! Sign into your new account below.</p>
        </div>
        <div class="alert alert-danger" v-if="showErrorMessage" role="alert">
          <p class="mb-0">
            Your password did not match the provided username. Try checking your
            <code>CAPSLOCK</code> key.
          </p>
        </div>

        <!-- Email -->
        <input
          type="text"
          id="loginUsername"
          v-model="username"
          v-bind:class="{disabled: disableClick}"
          class="form-control mb-4"
          placeholder="Username"
        />

        <!-- Password -->
        <input
          type="password"
          id="loginPassword"
          v-model="password"
          v-bind:class="{disabled: disableClick}"
          class="form-control mb-4"
          placeholder="Password"
        />

        <!-- Sign in button -->
        <button
          class="btn btn-info btn-block my-4"
          v-bind:class="{disabled: disableClick}"
          v-on:click="login"
          type="button"
        >Login</button>

        <!-- Register -->
        <p>
          Not a member?
          <router-link to="/signup">Register</router-link>
        </p>
      </form>
    </div>
    <!-- Default form login -->
  </div>
</template>

<script>
import LoginService from "../services/LoginService";

export default {
  name: "login",
  data: () => {
    return {
      username: "",
      password: "",
      disableClick: false,
      showErrorMessage: false,
      showRegisterSuccess: false
    };
  },
  created: function() {
    if (
      this.$route.query &&
      this.$route.query.success &&
      this.$route.query.username
    ) {
      this.username = this.$route.query.username;
      this.showRegisterSuccess = true;
    }
  },
  methods: {
    login: function() {
      this.disableClick = true;
      this.showErrorMessage = false;
      this.showRegisterSuccess = false;
      let authPromise = LoginService.loginRequest(this.username, this.password);
      authPromise
        .then((data, textStatus, xhr) => {
          let authToken = xhr.getResponseHeader("Authorization");

          LoginService.stashAuthToken(authToken);

          this.$router.push("/albums");
        })
        .catch(() => {
          this.disableClick = false;
          this.showErrorMessage = true;
        });
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
