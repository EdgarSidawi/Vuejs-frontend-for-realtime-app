<template>
  <div class="container">
    <div class="row my-2">
      <div class="col-md-8">
        <question
          v-for="question in questions"
          :key="question.title"
          :question="question"
        ></question>

        <nav aria-label="Page navigation example">
          <ul class="pagination d justify-content-center mt-2 mb-5">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-md-4">
        <app-sidebar></app-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import question from './Question';
import AppSidebar from './AppSidebar';

export default {
  data() {
    return {
      questions: {},
      links: null,
      meta: {}
    };
  },
  components: {
    question,
    AppSidebar
  },
  created() {
    axios.get('/api/question').then(res => {
      this.questions = res.data.data;
      console.log('questions: ', res.data);
    });
    // .catch(err => console.log(err));
  }
};
</script>

<style></style>
