<template>
  <div v-show="!isDesktop" class="nav-home">
    <nuxt-link to="/">
      <font-awesome-icon class="arrow-left" :icon="['fas', 'arrow-left']" />
    </nuxt-link>
    <nuxt-link to="/">
      <font-awesome-icon class="icon-home" :icon="['fas', 'home']" />
    </nuxt-link>
    <div></div>
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
