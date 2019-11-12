<template>
  <div class="container">
    <reply v-for="(reply,index) in replies" :key="reply.id" :reply="reply" :index="index"></reply>
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