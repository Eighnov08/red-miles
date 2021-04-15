<template>
  <div class="container-fluid">
    <img
      src="~/static/store/images/background.svg"
      class="bg-home desktop-banner"
    />
    <img
      src="~/static/store/images/background-mobile.svg"
      class="bg-home mobile-banner"
    />
    <div class="container home home-welcome">
      <HeaderHome />
      <div class="content home">
        <Card v-show="isDesktop" />
        <JobsMobile v-show="!isDesktop" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDesktop: true,
    }
  },
  created() {
    if (process.client) {
      this.onResize()
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      if (window.innerWidth > 1100) {
        this.isDesktop = true
      } else {
        this.isDesktop = false
      }
    },
  },
}
</script>
