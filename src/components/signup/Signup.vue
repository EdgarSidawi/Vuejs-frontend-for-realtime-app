<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-5 mx-auto">
        <div class="card card-default">
          <div class="card-header">
            <h5 class="text-center">Sign Up</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="signup">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  v-model="form.name"
                  name="name"
                  class="form-control"
                  placeholder="Enter Name"
                />
                <small class="text-danger" v-if="error.name">{{error.name[0]}}</small>
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
                <small class="text-danger" v-if="error.email">{{error.email[0]}}</small>
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
                <small class="text-danger" v-if="error.password">{{error.password[0]}}</small>
              </div>
              <div class="form-group">
                <label for="Password_confirmation">Confirm Password</label>
                <input
                  type="password"
                  v-model="form.password_confirmation"
                  name="password_confirmation"
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
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      error: {}
    };
  },
  created() {
    if (this.$store.state.isLoggedIn) {
      this.$router.push("/forum");
    }
  },
  methods: {
    signup() {
      axios
        .post("/api/auth/signup", this.form)
        .then(res => {
          if (res) {
            this.$store.commit("isLoggedIn", res.data);
            this.$router.push("/");
          }
        })
        .catch(err => {
          if (err) {
            this.error = err.response.data.errors;
          }
        });
    }
  }
};
</script>

<style>
</style>