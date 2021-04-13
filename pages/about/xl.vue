<template>
  <div class="container-fluid">
    <div class="container">
      <div class="about">
        <HeaderAbout v-if="isDesktop" />
        <div class="content about">
          <ArticleXl />
        </div>
        <div class="btn-wrapper-about">
          <BtnBack />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnBack from '@/components/button/BtnBack'
export default {
  components: {
    BtnBack,
  },
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
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
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
