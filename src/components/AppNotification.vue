<template>
  <div>
    <div class="dropdown">
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
      >Dropdown button</button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  created() {
    if (this.$store.state.isLoggedIn) {
      this.getNotification();
    }
  },
  methods: {
    getNotification() {
      Axios.get("api/notification");
    }
  }
};
</script>

<style>
</style>