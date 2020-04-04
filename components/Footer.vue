<template>
  <footer>
    <div class="footer-container">
    <div class="manager-container">
      <img
        class="footer-logo"
        src="https://res.cloudinary.com/olacode/image/upload/v1585867972/project%20manager/project-logo3_wl6fmi.png"
        alt="logo"
      />
      <h2>Project Manager</h2>
    </div>
    </div>
  </footer>
</template>

<style scoped>


@media screen and (min-width: 700px){
  .footer-container{
    bottom: -380px !important;
    left: 0;
    right: 0;

  }
  
}
footer{
  position: relative;
}
.manager-container {
  display: flex;
  place-items: center;
  width: 280px;
}

.footer-container {
  display: grid;
  place-items: center;
  background-color: #00113d;
  color: #72f3ec;
  height: 180px;
  width: 100%;
  position: absolute;
  bottom: -200px;
  left: 0;
  right: 0;
  /* margin-top: 100px !important; */
}
.footer-logo {
  width: 120px;
  border-radius: 100%;
  background-color: #00113d;
}
</style>
