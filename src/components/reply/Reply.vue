<template>
  <div class="card mt-2">
    <div class="card-body">
      <div class="card-title">
        <strong>{{reply.user}}</strong>
        said {{reply.created_at}}
      </div>
      <div class="card-text" v-html="body"></div>
      <div v-if="own">
        <hr />
        <button class="btn btn-warning mr-2">
          <small>edit</small>
        </button>
        <button class="btn btn-danger" @click="destroy(index)">
          <small>Delete</small>
        </button>
      </div>
    </div>
    <div class></div>
  </div>
</template>

<script>
import { EventBus } from "../../main";
import md from "marked";

export default {
  props: ["reply", "index"],
  computed: {
    own() {
      return localStorage.getItem("user_id") == this.reply.user_id;
    },
    body() {
      return md(this.reply.reply);
    }
  },
  methods: {
    destroy(index) {
      EventBus.$emit("deleteReply", index);
    }
  }
};
</script>

<style>
</style>