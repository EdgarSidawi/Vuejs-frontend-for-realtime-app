<template>
  <div class="card card-default">
    <div class="card-body">
      <h3 class="card-title">
        <router-link :to="question.path">{{question.title}}</router-link>
      </h3>
      <div class="card-subtitle" style="color:grey">{{question.user}} said {{question.created_at}}</div>
      <div class="card-text my-3">{{question.body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"]
};
</script>

<style>
</style>