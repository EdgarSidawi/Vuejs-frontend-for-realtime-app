<template>
  <div>
    <vue-simplemde v-model="reply.reply" ref="markdownEditor" />
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
import Axios from "axios";

export default {
  props: ["reply"],
  methods: {
    cancel() {
      EventBus.$emit("cancelEditing");
    },
    update() {
      Axios.patch(
        `api/question/${this.reply.question_slug}/reply/${this.reply.id}`,
        { body: this.reply.reply }
      ).then(this.cancel());
    }
  }
};
</script>

<style>
</style>