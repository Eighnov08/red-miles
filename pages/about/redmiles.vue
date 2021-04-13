<template>
  <div class="container-fluid">
    <div class="container">
      <div class="about">
        <HeaderAbout />
        <div class="content about">
          <ArticleRedMiles />
        </div>
        <div class="btn-wrapper-about">
          <BtnBack />
        </div>
      </div>
    </div>
    <NavArticle />
  </div>
</template>

<script>
import BtnBack from '@/components/button/BtnBack'
import NavArticle from '@/components/navigation/NavArticle'
export default {
  components: {
    BtnBack,
    NavArticle,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },
}
</script>
