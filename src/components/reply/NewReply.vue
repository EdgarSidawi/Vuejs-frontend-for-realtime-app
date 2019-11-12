<template>
  <div class="container mt-4 mb-4">
    <vue-simplemde v-model="body" ref="markdownEditor" />
    <div class="button btn btn-success mb-4">Reply</div>
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