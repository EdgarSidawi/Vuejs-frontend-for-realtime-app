<template>
  <div class="card card-default">
    <div class="card-body">
      <div class="card-title">
        <h3>{{question.title}}</h3>
        <div class="card-subtitle" style="color:grey">{{question.user}} said {{question.created_at}}</div>
      </div>
      <div class="card-text py-4">{{question.body}}</div>
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