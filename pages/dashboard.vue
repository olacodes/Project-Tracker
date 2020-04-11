<template>
  <div class="wrapper">
    <SecondNav />
    <div class="container mb-5">
      <ProjectModal />
      <ImageCard class="my-5"/>
      <SearchBar class="my-5"/>
      <ProjectCard class="my-5"/>
    </div>
  </div>
</template>

<script>

import SecondNav from '../components/navs/SecondNav'
import ImageCard from '../components/cards/ImageCard'
import SearchBar from '../components/SearchBar'
import ProjectCard from '../components/cards/ProjectCard'
import ProjectModal from '../components/modals/ProjectModal'

export default {
  components: {
    SecondNav,
    ImageCard,
    SearchBar,
    ProjectCard,
    ProjectModal
  }
}
</script>

<style>
  .wrapper{
    background-color: #eee;
  }
  .imageCard{
    margin: 50px 0;
  }
</style>