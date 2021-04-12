<template>
  <nuxt-link class="btn-back" to="/" @click.native="$router.go()">
    <font-awesome-icon class="arrow-left" :icon="['fas', 'arrow-left']" />
    <p>Back</p>
  </nuxt-link>
</template>

<script>
export default {}
</script>
