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
import Axios from "axios";
export default {
  props: ["reply"],
  data() {
    return {
      liked: this.reply.liked,
      count: this.reply.like_count
    };
  },
  computed: {
    color() {
      return this.liked ? "red" : "orange";
    }
  },
  created() {
    // var socketId = Echo.socketId();
    Echo.channel("likeChannel").listen("LikeEvent", e => {
      console.log(e);
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