<template>
  <div v-if="question">
    <show-question :question="question"></show-question>
    <replies :replies="question.replies"></replies>
    <new-reply :questionSlug="question.slug" @newReply="updateReplies($event)"></new-reply>
  </div>
</template>

<script>
import Axios from "axios";
import showQuestion from "./showQuestion";
import replies from "../reply/Replies";
import NewReply from "../reply/NewReply";

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
  },
  components: {
    showQuestion,
    replies,
    NewReply
  },
  methods: {
    updateReplies(reply) {
      this.question.replies.unshift(reply);
    }
  }
};
</script>

<style>
</style>