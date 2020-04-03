<template>
  <div class="wrapper">
    
    <div class="hero-wrapper">
      <div class="container">

        <div class="hero-container ">
          <div class="hero-text">
            <h1 class="hero__header__text">
              The #1 project management tool for software development used by agile teams
            </h1>
            
            <nuxt-link to="/register">
              <Button background="#72f3ec" width="200px" class="my-4" color="#00113d">Sign Up - It's Free!</Button>
            </nuxt-link>
          </div>

          <div class="hero-image">
            <!-- <img src="https://res.cloudinary.com/olacode/image/upload/c_scale,w_700/v1585944268/project%20manager/project-manager11_thynq5.png" alt=""> -->
            <img src="https://res.cloudinary.com/olacode/image/upload/v1585938105/project%20manager/project-manager7_dpphnc.png" alt="hero-image">
          </div>
        </div>

      </div>
    </div>
    <!-- hero ends -->

    <div class="hero-two-container">
      <div class="hero-two-text">
        <h2 class="hero-two-header">The best software teams ship early and often</h2>
        <p class="hero-two-sub-header">Manager software is built for every member of your software team to plan, track and release great software</p>
      </div>
    </div>

    <div class="workflow"></div>




  </div>
  
</template>
  
<script>
import {Button} from '../components/Button'
export default {
  components: {
    Button
  },

}
</script>

<style scoped>
.hero__header__text{
  max-width: 450px;
}

@media screen and (min-width:300px){
  .hero-container{
    padding: 0 20px;
  }
  img{
    max-width: 250px;
  }
  .hero__header__text{
    font-size: 30px;
    font-weight: 100;
  }
  
}
@media screen and (min-width: 750px) {
  .hero-image, img{
    max-width: 620px;
  }
  .hero-container{
    display: flex;
    justify-content: space-between;
  }
}
.hero-wrapper{
  /* border: 2px solid; */
  background-color: #00113d;
  color: white;
}
.hero-container{
  padding: 80px 0;
}
/* @media screen and (min-width: 1500px) {
  .wrapper{
    width: 1500px;
    margin-right: auto;
    margin-left: auto;
  }
} */


</style>