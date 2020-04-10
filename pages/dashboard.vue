<template>
  <div class="wrapper">
    <SecondNav />
    <div class="container">

    <ImageCard />
    </div>
    <h1>Wecome to the  Dashboard
    </h1>
  </div>
</template>

<script>
import SecondNav from '../components/secondNav'
import ImageCard from '../components/ImageCard'
export default {
  components: {
    SecondNav,
    ImageCard
  }
}
</script>

<style>
  .wrapper{
    background-color: #eee;
  }
</style>