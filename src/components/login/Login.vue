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
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  v-model="form.email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small
                  id="emailHelp"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  v-model="form.password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
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
      }
    };
  },
  methods: {
    login() {
      axios
        .post("/api/auth/login", this.form)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>