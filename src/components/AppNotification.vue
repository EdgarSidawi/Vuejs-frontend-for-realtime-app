<template>
  <div>
    <div class="dropdown">
      <button
        @click="toggler"
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        :style="{backgroundColor: color}"
      >{{unreadCount}} notifications</button>
      <div class="dropdown-menu" :class="{'show':show}">
        <div v-for="item in unread" :key="item.id">
          <router-link :to="item.path">
            <p class="dropdown-item" @click="readIt(item)">{{item.question}}</p>
          </router-link>
        </div>

        <div class="dropdown-divider"></div>

        <div v-for="item in read" :key="item.id">
          <p class="dropdown-item">{{item.question}}</p>
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
      Axios.post("api/notifications")
        .then(res => {
          this.read = res.data.read;
          this.unread = res.data.unread;
          this.unreadCount = res.data.unread.length;
        })
        .catch(err => {
          if (err.response.data.error == "Token is expired") {
            this.$store.commit("isLoggedOut");
            this.$router.push("/login");
          }
        });
    },
    toggler() {
      this.show = !this.show;
    },
    readIt(notification) {
      Axios.post("api/markAsRead", { id: notification.id }).then(
        this.unread.splice(notification, 1),
        this.read.push(notification),
        this.unreadCount--
      );
    }
  },
  computed: {
    color() {
      return this.unreadCount > 0 ? "red" : "blue";
    }
  }
};
</script>

<style>
</style>