<template>
  <div class="container pb-5">
    <clip-loader class="mt-5" :loading="loading" color="#00113d" size="60px"></clip-loader>

    <div class="card-container card my-5 shadow">
      <FlashMessage />
      <div class="login-header text-center p-3">
        <h2 class="login-text">Log in to Project Manager</h2>
      </div>
      <p class="text-center py-2">We can take you there as soon as you log in.</p>

      <form @submit.prevent="onSubmit" class="mx-5">
        <div class="form-group">
          <label for="Username">Username </label>
          <input type="text" v-model="username" class="form-control form-control-sm" />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" v-model="password" class="form-control form-control-sm" />
        </div>
        <div class="buttons">
          <button type="submit" class="btn btn-info login">Login</button>
          <div class="divider mx-4 my-4"></div>
          <nuxt-link to="/register" class="btn btn-outline-info register">
            sign up for manager
          </nuxt-link>
        </div>
      </form>

      <div class="line-or mx-5 my-4">
        <div class="line-wrapper">
          <div class="line"></div>
        </div>
        <div class="or mx-3">OR</div>
        <div class="line-wrapper">
          <div class="line"></div>
        </div>
      </div>
      <button class="btn mx-5 mb-5 fb-btn">Login with Facebook</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  components: {
    ClipLoader
  },
  data() {
    return {
      username: '',
      password: '',
      loading: null
    }
  },

  methods: {
    async onSubmit() {
      this.loading = 'loading'
      const username = this.username
      const password = this.password
      const payload = { username, password }

      let responseData = await this.$store.dispatch('auth/login', payload)

      let { status, message } = responseData

      this.loading = null

      if (status === 'success') {
        this.flashMessage.show({
          title: 'welcome back',
          status,
          message,
          icon:
            'https://res.cloudinary.com/olacode/image/upload/v1586618462/project%20manager/success-icon_b7m2vu.webp',
          clickable: true,
          blockClass: 'flash-message-class',
          positon: 'right top',
          x: 50,
          y: 600
        })
        setTimeout(() => {
          this.$router.push('/dashboard')
        }, 1000);
      } else {
        this.flashMessage.show({
          title: status,
          status,
          message,
          icon:
            'https://res.cloudinary.com/olacode/image/upload/v1586073406/project%20manager/error_qcaxmt.png',
          clickable: true,
          blockClass: 'flash-message-class',
          positon: 'right top',
          x: 50,
          y: 600
        })
      }
    }
  }
}
</script>

<style scoped>
/* deep__blue #00113d */
/* light cyan ##72f3ec */
.flash-message-class {
  width: 280px !important;
  /* height: 50px; */
}

@media screen and (min-width: 600px) {
  .card-container {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (min-width: 400px) {
  .login,
  .register {
    flex-grow: 1;
    width: 40%;
  }
  .buttons {
    display: flex;
  }
}
.card-container {
  position: relative;
  color: #00113d;
}
.login-header {
  background-color: #00113d;
  color: white;
}
.login-text {
  font-size: 22px;
}
.line-or {
  display: flex;
  justify-content: space-between;
}
.line-wrapper {
  display: inline-block;
  flex-grow: 2;
}
.line {
  border: 0.7px solid grey;
  text-align: center;
  margin-top: 12px;
}
.fb-btn {
  background-color: #72f3ec;
}
</style>
