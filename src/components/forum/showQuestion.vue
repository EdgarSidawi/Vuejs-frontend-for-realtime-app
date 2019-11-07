<template>
  <div class="card card-default">
    <div class="card-body">
      <div class="card-title d-flex justify-content-between">
        <div>
          <h3>{{question.title}}</h3>
          <small
            class="card-subtitle"
            style="color:grey"
          >{{question.user}} said {{question.created_at}}</small>
        </div>
        <div class="btn btn-primary my-auto mx-5" style="text-align: center, color: teal">5 replies</div>
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