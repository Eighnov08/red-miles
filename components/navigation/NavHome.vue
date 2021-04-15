<template>
  <div v-if="!isDesktop" class="nav-home">
    <nuxt-link to="/">
      <font-awesome-icon class="icon-home" :icon="['fas', 'home']" />
    </nuxt-link>
    <nuxt-link to="/">
      <div class="switch-to">Switch to Content Writer</div>
    </nuxt-link>
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
