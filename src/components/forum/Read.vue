<template>
  <div></div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      question: {}
    };
  },
  created() {
    Axios.get("api/question/" + this.$route.params.slug)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>