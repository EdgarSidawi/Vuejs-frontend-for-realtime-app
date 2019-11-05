<template>
  <div class="container py-5">
    <div>
      <form @submit.prevent="create">
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            type="text"
            v-model="form.title"
            name="title"
            class="form-control"
            placeholder="Title"
          />
        </div>
        <!-- <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          v-model="form.password"
          name="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
        </div>-->

        <button type="submit" class="btn btn-primary">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: null
      }
    };
  },
  methods: {
    create() {}
  }
};
</script>

<style>
</style>