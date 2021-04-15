<template>
  <div class="header header-detail">
    <div class="copy">
      <nuxt-link to="/">
        <Icon name="red-miles-red" />
      </nuxt-link>
      <p>
        Image to Reach & ER prediction with machine learning in 2 quick steps.
      </p>
    </div>
    <div v-show="isDesktop" class="btn-wrapper">
      <nuxt-link
        v-for="(item, index) in [
          {
            copy: 'About XL HOME',
            goto: '/about/xl',
          },
          {
            copy: 'About RED MILES',
            goto: '/about/redmiles',
          },
        ]"
        :key="index"
        :to="item.goto"
        class="btnAbout"
        >{{ item.copy }}</nuxt-link
      >
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
