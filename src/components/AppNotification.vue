<template>
  <div>
    <div class="dropdown">
      <button
        @click="toggler"
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
      >{{unreadCount}} notifications</button>
      <div class="dropdown-menu" :class="{'show':show}">
        <div v-for="item in unread" :key="item.id">
          <router-link :to="item.data.path">
            <p class="dropdown-item" @click="readIt(item.data)">{{item.data.question}}</p>
          </router-link>
        </div>
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
      Axios.post("api/notifications").then(res => {
        this.read = res.data.read;
        this.unread = res.data.unread;
        this.unreadCount = res.data.unread.length;
      });
    },
    toggler() {
      this.show = !this.show;
    },
    readIt(notification) {
      Axios.post("api/markAsRead", { id: notification.id }).then(
        res => console.log(res),

        this.unread.splice(notification, 1),
        this.read.push(notification),
        this.unreadCount--
      );
    }
  }
};
</script>

<style>
</style>