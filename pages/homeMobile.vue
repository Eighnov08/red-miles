<template>
  <div class="container-fluid">
    <div class="container home">
      <HeaderAbout />
      <div class="content home">
        <Card />
      </div>
    </div>
    <NavHome />
  </div>
</template>

<script>
import NavHome from '@/components/navigation/NavHome'
export default {
  components: {
    NavHome,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
}
</script>
