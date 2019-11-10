<template>
  <div class="container py-5">
    <div>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="category"></label>
          <input
            type="text"
            v-model="form.name"
            name="name"
            class="form-control"
            placeholder="Category Name"
          />
        </div>
        <button type="submit" class="btn btn-warning" v-if="editSlug">Update</button>
        <button type="submit" class="btn btn-primary" v-else>Create</button>
      </form>
    </div>

    <header class="text-center text-light border bg-primary py-2 my-5">CATEGORIES</header>
    <div class="list-group list-group-flush">
      <div class="list-group-item" v-for="(category,index) in categories" :key="category.id">
        {{category.name}}
        <div
          class="button btn btn-danger float-right mx-2"
          @click="destroy(category.slug,index)"
        >Delete</div>
        <div class="button btn btn-warning float-right mx-2" @click="edit(index)">Edit</div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      form: {
        name: null
      },
      categories: {},
      editSlug: null
    };
  },
  created() {
    Axios.get("api/category").then(res => {
      this.categories = res.data.data;
    });
  },
  methods: {
    submit() {
      this.editSlug ? this.update() : this.create();
    },
    create() {
      Axios.post("/api/category", this.form).then(res => {
        this.categories.unshift(res.data);
        this.form.name = null;
      });
    },
    update() {
      Axios.patch(`/api/category/${this.editSlug}`, this.form).then(res => {
        this.categories.unshift(res.data);
        this.form.name = null;
      });
    },
    destroy(slug, index) {
      Axios.delete(`api/category/${slug}`).then(
        this.categories.splice(index, 1)
      );
    },
    edit(index) {
      this.form.name = this.categories[index].name;
      this.editSlug = this.categories[index].slug;
      this.categories.splice(index, 1);
    }
  }
};
</script>

<style>
</style>