<template>
  <div class="container">
    <div class="about">
      <HeaderAbout />
      <div class="content about">
        <ArticleXl />
      </div>
      <div class="btn-wrapper-about">
        <BtnBack />
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
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },
}
</script>
