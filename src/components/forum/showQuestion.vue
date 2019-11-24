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
        <div
          class="btn btn-primary my-auto mx-5"
          style="text-align: center"
        >{{question.replies_count}} replies</div>
      </div>
      <div class="card-text py-4" v-html="body"></div>
      <div v-if="own">
        <button class="btn btn-warning" @click="edit">Edit</button>
        <button class="btn btn-danger mx-5" @click="destroy">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import md from "marked";
import Axios from "axios";
import Pusher from "pusher-js";

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
      Axios.delete(`api/question/${this.question.slug}`).then(
        this.$router.push("/forum")
      );
      // .catch(err => console.log(err.response.data));
    },
    edit() {
      this.$router.push(`/editQuestion/${this.question.slug}`);
    }
  },
  created() {
    this.pusher = new Pusher("9eda72f7cf99cdf049c3", {
      encrypted: "true",
      cluster: "eu"
    });
    this.channel = this.pusher.subscribe("newReplyChannel");
    this.channel.bind("App\\Events\\NewReplyEvent", e => {
      if (e) {
        this.question.replies_count++;
      }
    });

    this.pusher = new Pusher("9eda72f7cf99cdf049c3", {
      encrypted: "true",
      cluster: "eu"
    });
    this.channel = this.pusher.subscribe("deleteReplyChannel");
    this.channel.bind("App\\Events\\DeleteReplyEvent", e => {
      if (e) {
        this.question.replies_count--;
      }
    });
  }
};
</script>

<style>
</style>