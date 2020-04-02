<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light mb-5 shadow-lg position-sticky fixed-top"
  >
    <router-link class="navbar-brand link" to="/">
      <img
        class="nav-logo"
        src="https://res.cloudinary.com/olacode/image/upload/v1585867972/project%20manager/project-logo3_wl6fmi.png"
        alt="logo"
      />
      Manager
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/"
            >Home <span class="sr-only">(current)</span></router-link
          >
        </li>
      </ul>

      <router-link class="nav-link btn btn-outline-info my-2 my-sm-0 mr-3" to="/login"
        >Login</router-link
      >
      <router-link class="nav-link btn btn-outline-info my-2 my-sm-0" to="/register"
        >Register</router-link
      >
    </div>
  </nav>
</template>

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
