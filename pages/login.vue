<template>
  <div class="container">
    <clip-loader class="mt-5" :loading=loading  color="#00113d" size="60px"></clip-loader>

    <div class="card-container card mt-5 shadow">
      <div class="login-header text-center p-3">
        <h2 class="login-text">Log in to Project Manager</h2>
      </div>
      <p class="text-center py-2">We can take you there as soon as you log in.</p>

      <form @submit.prevent="onSubmit" class="mx-5">
        <div class="form-group">
          <label for="Username or Email">Username or Email</label>
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
      <button class="btn mx-5 mb-5 fb-btn">Login with Facbook</button>
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

      let responseData = await this.$store.dispatch('auth/login/loginUser', payload)
      
      let {status, message } = responseData

      this.loading=null

      if (status === 'success') {
        this.flashMessage.show({
          title: 'welcome back',
          status,
          message
        })
        this.$router.push('/dashboard')
      }else{
        this.flashMessage.show({
        status,
        message
        });
      }
    }
  }
}
</script>

<style scoped>
/* deep__blue #00113d */
/* light cyan ##72f3ec */
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
