<template>
  <div class="container">
    <reply v-for="reply in replies" :key="reply.id" :reply="reply"></reply>
  </div>
</template>

<script>
import reply from "./Reply";

export default {
  props: ["replies"],
  components: { reply }
};
</script>

<style>
</style>