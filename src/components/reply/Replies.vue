<template>
  <div class="container">
    <reply v-for="(reply,index) in replies" :key="reply.id" :reply="reply" :index="index"></reply>
  </div>
</template>

<script>
import reply from "./Reply";
import Pusher from "pusher-js";

export default {
  props: ["replies"],
  components: { reply },
  created() {
    // Pusher.log = function(msg) {
    //   console.log(msg);
    // };
    // this.pusher = new Pusher("9eda72f7cf99cdf049c3", {
    //   // authEndpoint: "/channels/broadcast",
    //   encrypted: "true",
    //   cluster: "eu",
    //   auth: {
    //     headers: {
    //       Authorization: "Bearer " + localStorage.getItem("token")
    //     }
    //   }
    // });
    // this.channel = this.pusher.subscribe(
    //   `private-App.User.${localStorage.getItem("user_id")}`
    // );
    // this.channel.bind(
    //   " Illuminate\\Notifications\\Events\\BroadcastNotificationCreated",
    //   e => {
    //     console.log(e);
    //   }
    // );

    this.pusher = new Pusher("9eda72f7cf99cdf049c3", {
      encrypted: "true",
      cluster: "eu"
    });
    this.channel = this.pusher.subscribe("deleteReplyChannel");
    this.channel.bind("App\\Events\\DeleteReplyEvent", e => {
      for (let index = 0; index < this.replies.length; index++) {
        if (this.replies[index].id == e.id) {
          this.replies.splice(index, 1);
        }
      }
    });
  }
};
</script>

<style>
</style>