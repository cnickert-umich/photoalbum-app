<template>
  <div class="login text-center pt-4">
    <!-- Default form login -->
    <div class="row justify-content-center">
      <form class="text-center border border-light p-5 col-md-6 col-lg-5" action="#!">
        <p class="h4 mb-4">Account Signup</p>

        <div class="alert alert-danger" v-if="showErrorMessage" role="alert">
          <p class="mb-0">Something went wrong. We could not create your account.</p>
        </div>
        <div class="alert alert-warning" v-if="showPasswordMatchErrorMessage" role="alert">
          <p class="mb-0">Your passwords did not match. Please confirm your password.</p>
        </div>

        <!-- Email -->
        <input
          type="text"
          id="signupUsername"
          v-model="username"
          v-bind:class="{disabled: disableClick}"
          class="form-control mb-4"
          placeholder="Username"
        />

        <!-- Password -->
        <input
          type="password"
          id="signupPassword"
          v-model="password"
          v-bind:class="{disabled: disableClick}"
          class="form-control mb-4"
          placeholder="Password"
        />

        <!-- Confirm Password -->
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          v-bind:class="{disabled: disableClick}"
          class="form-control mb-4"
          placeholder="Confirm Password"
        />

        <!-- Sign in button -->
        <button
          class="btn btn-info btn-block my-4"
          v-bind:class="{disabled: disableClick}"
          v-on:click="signup"
          type="button"
        >Signup</button>

        <!-- Register -->
        <p>
          Already have an account?
          <router-link to="/manage/login">Login</router-link>
        </p>
      </form>
    </div>
    <!-- Default form login -->
  </div>
</template>

<script>
import LoginService from "../services/LoginService";

export default {
  name: "signup",
  data: () => {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      disableClick: false,
      showErrorMessage: false,
      showPasswordMatchErrorMessage: false
    };
  },
  created: {},
  methods: {
    signup: function() {
      this.showErrorMessage = false;

      if (this.password != this.confirmPassword) {
        this.showPasswordMatchErrorMessage = true;
      } else {
        this.disableClick = true;
        this.showPasswordMatchErrorMessage = false;

        let registerPromise = LoginService.registerRequest(
          this.username,
          this.password
        );
        registerPromise
          .then(() => {
            this.$router.push({
              path: "/manage/login",
              query: { success: true, username: this.username }
            });
          })
          .catch(() => {
            this.disableClick = false;
            this.showErrorMessage = true;
          });
      }
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
