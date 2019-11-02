<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-5 mx-auto">
        <div class="card card-default">
          <div class="card-header">
            <h5 class="text-center">Login</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <p class="text-center text-danger">{{error}}</p>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  v-model="form.name"
                  name="name"
                  class="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div class="form-group">
                <label for="Email">Email address</label>
                <input
                  type="email"
                  v-model="form.email"
                  name="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="Password">Password</label>
                <input
                  type="password"
                  v-model="form.password"
                  name="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="Password_confirmation">Password</label>
                <input
                  type="password"
                  v-model="form.password_confirmation"
                  name="password"
                  class="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    login() {
      axios
        .post("/api/auth/login", this.form)
        .then(res => {
          if (res) {
            this.$store.commit("isLoggedIn", res.data);
            this.$router.push("/");
          }
        })
        .catch(err => {
          if (err) {
            this.error = "Invalid email and password";
          }
        });
    }
  }
};
</script>

<style>
</style>