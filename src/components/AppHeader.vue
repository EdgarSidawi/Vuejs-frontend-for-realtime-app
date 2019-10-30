<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between">
      <router-link class="navbar-brand" to="/">Realtime App</router-link>
      <div class="navbar-nav text-right">
        <router-link class="nav-item nav-link active mx-3" to="/forum">
          Forum
          <span class="sr-only">(current)</span>
        </router-link>
        <router-link class="nav-item nav-link mx-3" to="/questions">Ask Question</router-link>
        <router-link class="nav-item nav-link mx-3" to="/category">Category</router-link>
        <router-link class="nav-item nav-link mx-5" to="/login">Login</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>