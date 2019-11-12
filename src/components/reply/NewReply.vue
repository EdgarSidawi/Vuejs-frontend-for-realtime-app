<template>
  <div class="container mt-4 mb-4">
    <vue-simplemde v-model="body" ref="markdownEditor" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      body: null
    };
  }
};
</script>

<style>
</style>