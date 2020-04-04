<template>
  <div class="container">

  <div class="card-container card mt-5 shadow">
    <div class="login-header text-center p-3">
        <h2 class="login-text">Log in to Project Manager</h2>
    </div>
      <p class="text-center py-2">We can take you there as soon as you log in.</p>
      
      <form class="mx-5">
        <div class="form-group">
          <label for="Username or Email">Username or Email</label>
          <input type="text" class="form-control form-control-sm">
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" class="form-control form-control-sm">
        </div>
        <div class="buttons">
          <button type="submit" class="btn btn-info login"> Login </button>
          <div class="divider mx-4 my-4"></div>
          <button class="btn btn-outline-info register"> sign up for manager </button>
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
    .login, .register{
      flex-grow: 1;
      width: 40%;
    }
    .buttons{
      display: flex
      
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
  .fb-btn{
    background-color: #72f3ec;
    
  }
</style>