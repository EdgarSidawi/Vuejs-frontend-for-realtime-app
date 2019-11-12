<template>
  <div class="container mt-4 mb-4">
    <vue-simplemde v-model="body" ref="markdownEditor" />
    <div class="button btn btn-success mb-4" @click="submit">Reply</div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  props: ["questionSlug"],
  data() {
    return {
      body: null
    };
  },
  methods: {
    submit() {
      Axios.post(`api/question/${this.questionSlug}/reply`, { body: this.body })
        .then(res => {
          this.$emit("newReply", res.data.reply);
          this.body = "";
        })
        .catch(err => console.log(err.response.data));
    }
  }
};
</script>

<style>
</style>