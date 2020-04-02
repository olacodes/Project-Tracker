<template>
  <footer>
    <div class="manager-container">
      <img
        class="footer-logo"
        src="https://res.cloudinary.com/olacode/image/upload/v1585867972/project%20manager/project-logo3_wl6fmi.png"
        alt="logo"
      />
      <h2>Project Manager</h2>
    </div>
  </footer>
</template>

<style scoped>
.manager-container {
  display: flex;
  place-items: center;
  width: 300px;
}

footer {
  display: grid;
  place-items: center;
  background-color: #00113d;
  color: #72f3ec;
  height: 180px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  /* margin-top: -50px; */
}
.footer-logo {
  width: 120px;
  border-radius: 100%;
  background-color: #00113d;
}
</style>
