<template>
  <div class="header header-home">
    <div class="copy">
      <div v-show="!isDesktop" class="blank"></div>
      <nuxt-link to="/">
        <Icon name="red-miles-white" />
      </nuxt-link>
      <nuxt-link to="/about/redmiles">
        <font-awesome-icon
          v-show="!isDesktop"
          class="info-circle"
          :icon="['fas', 'info-circle']"
        />
      </nuxt-link>
      <p v-show="isDesktop">
        Image to Reach & ER prediction with machine learning in 2 quick steps.
      </p>
    </div>
    <nuxt-link v-show="isDesktop" to="/about/redmiles" class="btnAbout"
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
