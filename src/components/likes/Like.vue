<template>
  <div>
    <small class="btn btn-secondary" @click="likeIt">{{count}} likes</small>
  </div>
</template>

<script>
export default {
  props: ["reply"],
  data() {
    return {
      liked: this.reply.liked,
      count: this.reply.like_count
    };
  },
  methods: {
    likeIt() {
      if (this.$store.state.isLoggedIn) {
        this.liked ? this.increment() : this.decrement();
        this.liked = !this.liked;
      }
    },
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
</script>

<style>
</style>