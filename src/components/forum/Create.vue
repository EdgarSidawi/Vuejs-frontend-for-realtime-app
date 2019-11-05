<template>
  <div>
    <form @submit.prevent="login">
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
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          v-model="form.password"
          name="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group form-select">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Keep me logged In</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>