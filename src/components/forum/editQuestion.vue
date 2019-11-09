<template>
  <div class="container py-5">
    <div>
      <form @submit.prevent="update">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            v-model="form.title"
            name="title"
            class="form-control"
            placeholder="Title"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Select</label>
          </div>
        </div>
        <div>
          <vue-simplemde v-model="form.body" ref="markdownEditor" />
        </div>

        <button type="submit" class="btn btn-primary">Update</button>
        <button class="btn btn-danger mx-5" @click="Cancel">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      form: {
        title: null,
        body: null
      }
    };
  },
  created() {
    Axios.get(`api/question/${this.$route.params.slug}`).then(res => {
      this.form = res.data.data;
    });
  },
  methods: {
    update() {
      Axios.patch(`api/question/${this.$route.params.slug}`, this.form)
        .then(this.Cancel())
        .catch(err => console.log(err.response.data));
    },
    Cancel() {
      this.$router.push(`/question/${this.$route.params.slug}`);
    }
  }
};
</script>

<style>
</style>