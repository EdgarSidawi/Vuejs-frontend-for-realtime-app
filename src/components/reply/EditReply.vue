<template>
  <div>
    <vue-simplemde v-model="body" ref="markdownEditor" />
  </div>
</template>

<script>
export default {
  props: ["reply"],
  data() {
    return {
      body: this.reply
    };
  }
};
</script>

<style>
</style>