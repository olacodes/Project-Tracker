<template>
  <div class="wrapper">
    <SecondNav />
    <div class="container mb-5">
      <ImageCard class="my-5"/>
      <SearchBar class="my-5"/>
      <ProjectCard class="my-5"/>
    </div>
  </div>
</template>

<script>
import SecondNav from '../components/secondNav'
import ImageCard from '../components/ImageCard'
import SearchBar from '../components/SearchBar'
import ProjectCard from '../components/ProjectCard'
export default {
  components: {
    SecondNav,
    ImageCard,
    SearchBar,
    ProjectCard
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