<template>
  <div class="error-cont text-center">
      <div class="error">
        <img class="error-img" src="https://res.cloudinary.com/olacode/image/upload/v1586073406/project%20manager/error_qcaxmt.png" alt="not found">
        <h1 class="error-h1">Page Not Found </h1>
        <nuxt-link to="/">
            Go Back
        </nuxt-link>

      </div>
  </div>
</template>

<script>
export default {
    layout: 'emptyLayout',

}
</script>

<style>
    .error-img{
        max-width: 200px;
    }
    .error-h1{
        font-size: 24px !important;
    }
    .error{
        margin-top: 45%;
    }
    @media screen and (min-width: 700px) {
        .error-img{
            max-width: 300px;
        }
        .error-h1{
            font-size: 30px !important;
        }
        .error{
            margin-top: 17%;
        }
    }

</style>
