<template>
  <div>
    <small
      class="btn btn-secondary"
      :style="{backgroundColor: color}"
      @click="likeIt"
    >{{count}} likes</small>
  </div>
</template>

<script>
import Pusher from "pusher-js";

import Axios from "axios";
export default {
  props: ["reply"],
  data() {
    return {
      liked: this.reply.liked,
      count: this.reply.like_count,
      pusher: null
    };
  },
  computed: {
    color() {
      return this.liked ? "red" : "orange";
    }
  },
  created() {
    this.pusher = new Pusher("7b998a7b07a4503ca2de", {
      encrypted: "true",
      cluster: "eu"
    });
  },
  methods: {
    likeIt() {
      if (this.$store.state.isLoggedIn) {
        this.liked ? this.decrement() : this.increment();
        this.liked = !this.liked;
      }
    },
    increment() {
      Axios.post(`api/like/${this.reply.id}`).then(this.count++);
    },
    decrement() {
      Axios.delete(`api/like/${this.reply.id}`).then(this.count--);
    }
  }
};
</script>

<style>
</style>