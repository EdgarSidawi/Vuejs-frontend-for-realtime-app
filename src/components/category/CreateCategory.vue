<template>
  <div class="container py-5">
    <div>
      <form @submit.prevent="update">
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
        <button type="submit" class="btn btn-primary" style="backgroundColor:teal">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        category: null
      }
    };
  }
};
</script>

<style>
</style>