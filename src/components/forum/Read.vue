<template>
  <div>
    <show-question :question="question"></show-question>
  </div>
</template>

<script>
import Axios from "axios";
import showQuestion from "./showQuestion";

export default {
  data() {
    return {
      question: {}
    };
  },
  created() {
    Axios.get("api/question/" + this.$route.params.slug).then(res => {
      this.question = res.data.data;
    });
  },
  components: {
    showQuestion
  }
};
</script>

<style>
</style>