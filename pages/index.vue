<template>
  <div class="wrapper mb-5">
    <div class="hero-wrapper">
      <div class="container">
        <div class="hero-container ">
          <div class="hero-text">
            <h1 class="hero__header__text">
              The #1 project management tool for software development used by agile teams
            </h1>
            <div @click="preconnect">
              <nuxt-link to="/register">
                <Button background="#72f3ec" width="200px" class="my-4" color="#00113d"
                  >Sign Up - It's Free!</Button
                >
              </nuxt-link>
            </div>
          </div>

          <div class="hero-image">
            <img
              class="img"
              src="https://res.cloudinary.com/olacode/image/upload/v1585938105/project%20manager/project-manager7_dpphnc.png"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- hero ends -->

    <div class="hero-two-container container">
      <div class="hero-two-text text-center">
        <h2 class="hero-two-header">The best software teams ship early and often</h2>
        <p class="hero-two-sub-header">
          Manager software is built for every member of your team to plan, track and release great
          software
        </p>
      </div>

      <div class="workflow-container d-md-flex justify-content-between">
        <div class="workflow-image hero-image">
          <img
            class="img"
            src="https://res.cloudinary.com/olacode/image/upload/c_scale,w_700/v1585944268/project%20manager/project-manager11_thynq5.png"
            alt=""
          />
        </div>

        <div class="workflow-text-container pl-md-4 pl-lg-5 pt-md-4">
          <div class="workflow-team my-md-4">
            <h4 class="team__header__text">Plan</h4>
            <p class="team__sub__header">
              Create user stories and issues, plan sprints, and distribute tasks across your
              software team.
            </p>
          </div>

          <div class="workflow-team ">
            <h4 class="team__header__text">Work</h4>
            <p class="team__sub__header">
              Work with your team to plan, organize, and discus your team's progres.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero two ends -->

    <div class="get-started-container container d-md-flex justify-content-between">
      <div class="left-image">
        <img
          class="get-started-img"
          src="https://res.cloudinary.com/olacode/image/upload/c_scale,w_400/v1585958818/project%20manager/project-manager-13_qzyfnk.png"
          alt=""
        />
      </div>

      <div class="get-started-text text-center">
        <h2 class="get-started-header">
          Start Planning Today
        </h2>
        <p class="get-started-para pb-3">
          Sign up and become one of the millions of people around the world using Trello to get more
          done.
        </p>
        <div v-on:click="preconnect">
          <nuxt-link to="/register" v-on:click="preconnect">
            <Button background="#00113d" @click="preconnect">Get Started - It's Free!</Button>
          </nuxt-link>
        </div>
      </div>

      <div class="right-image">
        <img
          class="get-started-img"
          src="https://res.cloudinary.com/olacode/image/upload/c_scale,w_700/v1585944268/project%20manager/project-manager11_thynq5.png"
          alt=""
        />
      </div>
    </div>
    <!-- End get-started -->
  </div>
</template>

<script>
import { Button } from '../components/Button'
export default {
  components: {
    Button
  },
  created() {
    this.$axios.$get('https://project-managers.herokuapp.com/api/')
  },

  methods: {
    preconnect: function(e) {
      this.$axios.$get('/')
    }
  }
}
</script>

<style scoped>
.get-started-container {
  padding-top: 100px;
}
.right-image,
.left-image,
.get-started-img {
  max-width: 250px;
}

.get-started-text {
  max-width: 450px;
}
.hero-two-sub-header {
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 50px;
  font-size: 23px;
  font-weight: 100;
}
.hero-two-header {
  font-size: 40px;
  font-weight: 400;
  padding: 1rem 0;
}
.hero-two-text {
  /* background-color: #00113d00; */
  margin-left: auto;
  margin-right: auto;
  margin: 50px auto;
}

.hero-wrapper {
  background-color: #00113d;
  color: white;
}

.hero__header__text {
  max-width: 450px;
}

@media screen and (min-width: 300px) {
  .hero-container {
    padding: 50px 20px;
  }
  .img {
    max-width: 250px;
  }
  .hero__header__text {
    font-size: 30px;
    font-weight: 100;
  }
}

@media screen and (min-width: 750px) {
  .hero-image,
  .img {
    max-width: 500px;
  }
  .get-started-container {
    padding-top: 150px;
  }
  .hero-container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0;
  }
}
</style>
