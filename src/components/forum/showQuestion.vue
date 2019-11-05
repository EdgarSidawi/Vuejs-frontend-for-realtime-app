<template>
  <div class="card card-default">
    <div class="card-body">
      <div class="card-title">
        <h3>{{question.title}}</h3>
      </div>
      <div class="card-subtitle">{{question.user}} said {{question.created_at}}</div>
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