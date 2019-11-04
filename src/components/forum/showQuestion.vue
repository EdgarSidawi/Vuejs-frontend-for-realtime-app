<template>
  <div class="card card-default">
    <div class="card-body">
      <div class="card-title">{{question.title}}</div>
      <div class="card-text">{{question.body}}</div>
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