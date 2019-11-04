<template>
  <div class="row">
    <div class="col-md-8">
      <question v-for="question in questions" :key="question.title" :question="question"></question>
    </div>
    <div class="col-md-4">sidebars</div>
  </div>
</template>

<script>
import axios from "axios";
import question from "./Question";

export default {
  data() {
    return {
      questions: {}
    };
  },
  components: {
    question
  },
  created() {
    axios
      .get("/api/question")
      .then(res => {
        this.questions = res.data.data;
        console.log("questions: ", this.questions);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>