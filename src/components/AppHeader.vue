<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between">
      <router-link class="navbar-brand" to="/">Realtime App</router-link>
      <app-notification v-if="isLoggedIn"></app-notification>
      <div class="navbar-nav text-right">
        <router-link class="nav-item nav-link active mx-3" to="/forum">
          Forum
          <span class="sr-only">(current)</span>
        </router-link>
        <router-link v-if="isLoggedIn" class="nav-item nav-link mx-3" to="/ask">Ask Question</router-link>
        <router-link
          v-if="isLoggedIn "
          v-show="isAdmin"
          class="nav-item nav-link mx-3"
          to="/category"
        >Category</router-link>
      </div>
      <div class="navbar-nav text-right d-flex justify-content-between">
        <div v-if="!isLoggedIn">
          <router-link class="nav-item nav-link mx-5" to="/login">Login</router-link>
        </div>
        <div v-if="!isLoggedIn">
          <router-link class="nav-item nav-link mx-5" to="/signup">Sign Up</router-link>
        </div>
        <div v-else class="navbar-nav text-right">
          <p class="nav-item nav-link mx-5 m-auto" @click="logout" style="cursor: pointer">Logout</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import AppNotification from "./AppNotification";

export default {
  data() {
    return {
      loggedIn: ""
    };
  },
  components: { AppNotification },
  methods: {
    logout() {
      this.$store.commit("isLoggedOut");
      this.$router.push("/login");
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    isAdmin() {
      return this.$store.state.isAdmin;
    }
  }
};
</script>

<style>
</style>