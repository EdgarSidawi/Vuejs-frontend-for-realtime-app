<template>
  <div v-if="question">
    <show-question :question="question"></show-question>
    <replies :replies="question.replies"></replies>
    <new-reply :questionSlug="question.slug" @newReply="updateReplies($event)" v-if="loggedIn"></new-reply>
  </div>
</template>

<script>
import Axios from "axios";
import showQuestion from "./showQuestion";
import replies from "../reply/Replies";
import NewReply from "../reply/NewReply";
import { EventBus } from "../../main";

export default {
  data() {
    return {
      question: null
    };
  },
  created() {
    Axios.get("api/question/" + this.$route.params.slug).then(res => {
      this.question = res.data.data;
    });

    EventBus.$on("deleteReply", index => {
      Axios.delete(
        `api/question/${this.question.slug}/reply/${this.question.replies[index].id}`
      );
      // .then(res => console.log(res));
      this.question.replies.splice(index, 1);
    });
  },
  components: {
    showQuestion,
    replies,
    NewReply
  },
  methods: {
    updateReplies(reply) {
      this.question.replies.unshift(reply);
      window.scrollTo(0, 0);
    }
    // destroy(index) {
    //   console.log('index', index);
    // }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>

<style></style>
