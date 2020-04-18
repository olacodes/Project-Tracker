<template>
  <div class="nav-wrapper">
    <nav class="navbar shadow-lg position-sticky fixed-top d-flex">
      <div class="left-nav-link d-flex">
        <router-link class="navbar-brand link" to="/">
          <img
            class="nav-logo"
            src="https://res.cloudinary.com/olacode/image/upload/c_scale,w_100/v1585867972/project%20manager/project-logo3_wl6fmi.webp"
            alt="logo"
          />
          Manager
        </router-link>
        <div v-if="isLoggedIn">
          <nuxt-link class="nav-link  my-2" to="/dashboard">Dashboard</nuxt-link>
        </div>
      </div>

      <div class="login-register d-flex justify-content-between">
        <div class="" v-if="isLoggedIn" @click="logOut">
          <router-link class="nav-link btn btn-sm md-btn-lg  my-2 my-sm-0" to="/"
            >Logout </router-link
          >
        </div>
        <div v-else class="d-flex">
          <router-link class="nav-link btn btn-sm md-btn-lg  my-2 my-sm-0 " to="/login"
            >Login</router-link
          >
          <router-link class="nav-link btn btn-sm btn-outline-info my-2 my-sm-0" to="/register"
            >Register</router-link
          >
        </div>
      </div>
      <!-- </div> -->
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  },

  methods: {
    ...mapActions('auth', ['logout']),
    logOut() {
      this.logout()
    },
  }
}
</script>

<style scoped>
.nav-link,
.link {
  color: #72f3ec !important;
}
.nav-logo {
  width: 60px;
}
.navbar {
  min-height: 70px;
  background-color: #00113d !important;
}
</style>
