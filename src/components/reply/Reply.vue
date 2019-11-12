<template>
  <div class="card mt-2">
    <div class="card-body">
      <div class="card-title">
        <strong>{{reply.user}}</strong>
        said {{reply.created_at}}
      </div>

      <edit-reply v-if="editing" :reply="reply.reply"></edit-reply>

      <div class="card-text" v-html="body" v-else></div>

      <div v-if="!editing">
        <div v-if="own">
          <hr />
          <button class="btn btn-warning mr-2" @click="edit">
            <small>edit</small>
          </button>
          <button class="btn btn-danger" @click="destroy(index)">
            <small>Delete</small>
          </button>
        </div>
      </div>
    </div>
    <div class></div>
  </div>
</template>

<script>
import { EventBus } from "../../main";
import md from "marked";
import EditReply from "./EditReply";

export default {
  props: ["reply", "index"],
  data() {
    return {
      editing: false
    };
  },
  created() {
    this.listen();
  },
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
    },
    edit() {
      this.editing = true;
    },
    listen() {
      EventBus.$on("cancelEditing", () => {
        this.editing = false;
      });
    }
  },
  components: {
    EditReply
  }
};
</script>

<style>
</style>