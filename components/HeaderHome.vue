<template>
  <div class="header header-home">
    <div class="copy">
      <nuxt-link to="/" @click.native="$router.go()">
        <Icon name="red-miles-white" />
      </nuxt-link>
      <p>
        Image to Reach & ER prediction with <br />machine learning in 2 quick
        steps.
      </p>
    </div>
    <nuxt-link to="/about/redmiles" class="btnAbout">About RED MILES</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>
