<template>
  <div class="header header-home">
    <div class="copy">
      <nuxt-link to="/" @click.native="$router.go()">
        <Icon name="red-miles-white" />
      </nuxt-link>
      <p v-if="isDesktop">
        Image to Reach & ER prediction with <br />machine learning in 2 quick
        steps.
      </p>
    </div>
    <nuxt-link v-if="isDesktop" to="/about/redmiles" class="btnAbout"
      >About RED MILES</nuxt-link
    >
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
    if (process.browser) {
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
