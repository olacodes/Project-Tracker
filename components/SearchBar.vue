<template>
  <div class="search-wrapper d-flex justify-content-between">
      <div class=" input-wrapper card">
        <input class="input-element" type="text" placeholder="Search Projects">
      </div>
        <div class=" button-wrapper">
            <button class=" button is-primary">Search Projects</button>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.input-wrapper{
    width: 100%;
    margin-right: 2.5%;
    vertical-align: baseline;
    border-radius: 5px;


}
.input-element{
    width: 100%;
    padding: 8px;
    border: none;
    vertical-align: baseline;
    border-radius: 5px;

}

</style>