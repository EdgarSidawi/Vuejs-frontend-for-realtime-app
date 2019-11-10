<template>
  <div class="container py-5">
    <div>
      <form @submit.prevent="create">
        <div class="form-group">
          <label for="category"></label>
          <input
            type="text"
            v-model="form.category"
            name="category"
            class="form-control"
            placeholder="Category Name"
          />
        </div>
        <button type="submit" class="btn btn-primary">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      form: {
        category: null
      }
    };
  },
  methods: {
    create() {
      Axios.post("api/category", this.form).then(res => console.log(res.data));
    }
  }
};
</script>

<style>
</style>