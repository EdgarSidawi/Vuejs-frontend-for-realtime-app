<template>
  <div class="card mt-2">
    <div class="card-body">
      <div class="card-title">
        <strong>{{reply.user}}</strong>
        said {{reply.created_at}}
      </div>
      <div class="card-text" v-html="reply.reply"></div>
      <div>
        <hr />
        <button class="btn btn-warning mr-2">
          <small>edit</small>
        </button>
        <button class="btn btn-danger">
          <small>Delete</small>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["reply"]
};
</script>

<style>
</style>