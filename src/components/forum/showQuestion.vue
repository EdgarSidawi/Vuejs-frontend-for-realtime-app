<template>
  <div class="card card-default">
    <div class="card-body">
      <div class="card-title d-flex justify-content-between">
        <div>
          <h3>{{question.title}}</h3>
          <small
            class="card-subtitle"
            style="color:grey"
          >{{question.user}} said {{question.created_at}}</small>
        </div>
        <div class="btn btn-primary my-auto mx-5" style="text-align: center, color: teal">5 replies</div>
      </div>
      <div class="card-text py-4" v-html="body"></div>
      <div v-if="own">
        <button class="btn btn-warning">Edit</button>
        <button class="btn btn-danger mx-5" @click="destroy">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import md from "marked";
import Axios from "axios";

export default {
  props: ["question"],
  computed: {
    body() {
      return md(this.question.body);
    },
    own() {
      return this.question.user_id == localStorage.getItem("user_id");
    }
  },
  methods: {
    destroy() {
      Axios.delete(`api/question/${this.question.slug}`)
        .then(this.$router.push("/forum"))
        .catch(err => console.log(err.response.data));
    }
  }
};
</script>

<style>
</style>