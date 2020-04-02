<template>
  <div class="card-container card mt-5 shadow">
    <div class="login-header text-center p-3">
        <h2 class="login-text">Sign up for Project Manager</h2>
    </div>
      
      <form class="mx-5 pt-5">

        <div class="username-email">
            <div class="form-group username-container">
            <label for="Username or Email">Username </label>
            <input type="text" class="form-control form-control-sm">
            <small class="form-text text-muted">Please enter your username</small>
            </div>

            <div class="divider mx-3"></div>

            <div class="form-group email-container">
            <label for="Email">Email</label>
            <input type="email" class="form-control form-control-sm">
            <small class="form-text text-muted ">Please enter your Email</small>

            </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" class="form-control form-control-sm">
          <small class="form-text text-muted ">password must not be less than 3 characters</small>

        </div>
        <div class="buttons">
          <button type="submit" class="btn btn-info sign-up"> Sign up </button>
          <div class="divider mx-3"></div>
          <p class="text-muted sign-in"> Already have an account? Sign in. </p>
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
      <button class="btn btn-primary mx-5 mb-5">Sign up with Facbook</button>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
  /* deep__blue #00113d */
  /* light cyan ##72f3ec */
  @media screen and (min-width: 600px){
    .card-container{
      width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media screen and (min-width: 400px){
      .username-container, .email-container, .sign-up, .sign-up{
          width: 40%;
          flex-grow: 1;

      }
      .username-email, .buttons {
          display: flex !important;
      }
  }
 
  .card-container{
    color: #00113d;
  }
  .login-header{
    background-color: #00113d;
    color: white;

  }
  .login-text{
    font-size: 22px;
  }
  .line-or{
    display: flex;
    justify-content: space-between;
  }
  .line-wrapper{
    display: inline-block;
    flex-grow: 2;

  }
  .line{
    border: .7px solid grey;
    text-align: center;
    margin-top: 12px;
  }

</style>