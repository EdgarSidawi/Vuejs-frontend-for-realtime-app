<template>
  <div class="container py-5">
    <div>
      <form @submit.prevent="create">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            v-model="form.title"
            name="title"
            class="form-control"
            placeholder="Title"
          />
          <small class="text-danger" v-if="errors.title">{{errors.title[0]}}</small>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Select</label>
          </div>
          <select class="custom-select" id="inputGroupSelect01" v-model="form.category_id">
            <option
              v-for="category in categories"
              :value="category.id"
              :key="category.id"
            >{{category.name}}</option>
          </select>
          <small class="text-danger" v-if="errors.category_id">The category field is required.</small>

          <br />
        </div>
        <small class="text-danger" v-if="errors.body">{{errors.body[0]}}</small>
        <div>
          <vue-simplemde v-model="form.body" ref="markdownEditor" />
        </div>

        <button type="submit" class="btn btn-primary" :disabled="disabled">Create</button>
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
        category_id: null,
        body: null
      },
      categories: {},
      errors: {}
    };
  },
  created() {
    Axios.get("api/category").then(res => {
      this.categories = res.data.data;
    });
  },
  methods: {
    create() {
      Axios.post("api/question", this.form)
        .then(res => {
          this.$router.push(res.data.path);
        })
        .catch(err => {
          this.errors = err.response.data.errors;
        });
    }
  },
  computed: {
    disabled() {
      return !(this.form.title && this.form.body && this.form.category_id);
    }
  }
};
</script>

<style>
</style>