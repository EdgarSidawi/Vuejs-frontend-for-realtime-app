<template>
  <div>
    <vue-simplemde v-model="body" ref="markdownEditor" />
    <div>
      <hr />
      <button class="btn btn-warning mr-2" @click="update">
        <small>Update</small>
      </button>
      <button class="btn btn-danger" @click="cancel">
        <small>Cancel</small>
      </button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../main";

export default {
  props: ["reply"],
  data() {
    return {
      body: this.reply.reply
    };
  },
  methods: {
    cancel() {
      EventBus.$emit("cancelEditing");
    },
    update() {}
  }
};
</script>

<style>
</style>