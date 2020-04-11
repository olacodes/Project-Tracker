<template>
  <div class="nav-wrapper">

  <nav
    class="navbar shadow-lg position-sticky fixed-top d-flex" @click="preconnect"
  >
    <router-link class="navbar-brand link" to="/">
      <img
        class="nav-logo"
        src="https://res.cloudinary.com/olacode/image/upload/v1585867972/project%20manager/project-logo3_wl6fmi.png"
        alt="logo"
      />
      Manager
    </router-link>
    
    <div class="login-register d-flex justify-content-between">

      <router-link class="nav-link btn btn-sm md-btn-lg  my-2 my-sm-0 " to="/login"
        >Login</router-link
      >
      <router-link class="nav-link btn btn-sm btn-outline-info my-2 my-sm-0" to="/register"
        >Register</router-link
      >
    </div>
    <!-- </div> -->
  </nav>
  </div>
</template>

<script>
export default {
  methods:{
    preconnect(){
      this.$axios.$get('https://project-managers.herokuapp.com/api/')
    }
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
