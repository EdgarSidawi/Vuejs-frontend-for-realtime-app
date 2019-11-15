<template>
  <div>
    <div class="dropdown">
      <button
        @click="toggler"
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
      >notification</button>
      <div class="dropdown-menu" :class="{'show':show}">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      read: {},
      unread: {},
      unreadCount: 0,
      show: false
    };
  },
  created() {
    if (this.$store.state.isLoggedIn) {
      this.getNotification();
    }
  },
  methods: {
    getNotification() {
      Axios.post("api/notification").then(res => {
        this.read = res.data.read;
        this.unread = res.data.unread;
        this.unreadCount = res.data.unread.length;
      });
    },
    toggler() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
</style>