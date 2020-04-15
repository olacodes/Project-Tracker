<template>
  <div class="project-card d-md-flex has-text-link has-text-justified">
    <div class="card-wrapper m-1" v-for="project in getUserProjects" :key="project.id">
      <div class="card mb-3">
        <header class="card-header">
          <h4 class="card-header-title ">
            {{ project.projectName }}
          </h4>
        </header>
        <div class="card-content p-4">
          <div class="content">
            {{ project.projectDescription }}
            <br />
            <time datetime="2016-1-1">{{ project.createdAt }}</time>
          </div>
        </div>
        <footer class="card-footer d-flex justify-content-around has-text-primary">
          <p>createdBy: {{ project.createdBy }}</p>
          <i class="fas fa-thumbs-up" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
          <i class="fa fa-chart-line" aria-hidden="true"></i>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('projects', ['getUserProjects'])
  }
}
</script>

<style scoped>
.card-wrapper {
  /* border: 2px solid !important; */
  width: 300px;
  flex: 2 1 33%;
}
.project-card {
  flex-wrap: wrap;
}
</style>
