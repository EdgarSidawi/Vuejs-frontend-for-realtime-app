<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  created() {
    if (localStorage.getItem("token")) {
      this.$store.state.isLoggedIn = true;
    }
    if (localStorage.getItem("user_id") == 1) {
      this.$store.state.isAdmin = true;
    }
  }
};
</script>

<style>
</style>
