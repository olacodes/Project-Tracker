<template>
  <div class="wrapper">
    <SecondNav />
    <div class="container">
      <ImageCard class="my-5"/>
      <SearchBar/>

    </div>
    <h1>Wecome to the  Dashboard
    </h1>
  </div>
</template>

<script>
import SecondNav from '../components/secondNav'
import ImageCard from '../components/ImageCard'
import SearchBar from '../components/SearchBar'
export default {
  components: {
    SecondNav,
    ImageCard,
    SearchBar
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