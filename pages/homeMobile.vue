<template>
  <div class="container-fluid">
    <div class="container home">
      <HeaderAbout />
      <div class="content home">
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
}
</script>
