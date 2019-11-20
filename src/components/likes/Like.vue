<template>
  <div>
    <small
      class="btn btn-secondary"
      :style="{ backgroundColor: color }"
      @click="likeIt"
      >{{ count }} likes</small
    >
  </div>
</template>

<script>
import Pusher from 'pusher-js';

import Axios from 'axios';
export default {
  props: ['reply'],
  data() {
    return {
      liked: this.reply.liked,
      count: this.reply.like_count,
      pusher: null,
      channel: null
    };
  },
  computed: {
    color() {
      return this.liked ? 'red' : 'orange';
    }
  },
  created() {
    Pusher.log = function(msg) {
      console.log(msg);
    };
    this.pusher = new Pusher('9eda72f7cf99cdf049c3', {
      encrypted: 'true',
      cluster: 'eu'
    });
    this.channel = this.pusher.subscribe('likeChannel');
    this.channel.bind('App\\Events\\LikeEvent', e => {
      if (this.reply.id == e.id) {
        e.type == 1 ? this.count++ : this.count--;
      }
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
      Axios.post(`api/like/${this.reply.id}`);
      // .then(this.count++);
    },
    decrement() {
      Axios.delete(`api/like/${this.reply.id}`);
      // .then(this.count--);
    }
  }
};
</script>

<style></style>
