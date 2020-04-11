<template>
 <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete is-danger button" aria-label="close">close</button>
    </header>
    <section class="modal-card-body">
        <h1>modal body</h1>
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Create Project</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
 .modal-content{
     max-width: 640px;
 }
</style>