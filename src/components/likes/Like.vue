<template>
  <div>
    <small class="btn btn-secondary" @click="likeIt">{{count}} likes</small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liked: false,
      count: 0
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