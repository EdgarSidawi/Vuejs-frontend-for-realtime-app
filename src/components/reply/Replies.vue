<template>
  <div class="container">
    <reply v-for="reply in content" :key="reply.id" :reply="reply"></reply>
  </div>
</template>

<script>
import reply from "./Reply";

export default {
  props: ["replies"],
  data() {
    return {
      content: this.replies
    };
  },
  components: { reply },
  created() {
    console.log("content: ", this.content);
  }
};
</script>

<style>
</style>