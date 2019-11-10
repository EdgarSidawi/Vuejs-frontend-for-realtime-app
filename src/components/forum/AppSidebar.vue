<template>
  <div>
    <header class="text-center text-light border bg-primary py-2">CATEGORIES</header>
    <div class="list-group list-group-flush">
      <div
        class="list-group-item"
        v-for="category in categories"
        :key="category.id"
      >{{category.name}}</div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      categories: null
    };
  },
  created() {
    Axios.get("api/category").then(res => {
      this.categories = res.data.data;
    });
  }
};
</script>

<style>
</style>