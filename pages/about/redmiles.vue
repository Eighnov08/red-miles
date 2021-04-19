<template>
  <div class="container-fluid">
    <div class="container">
      <div class="about">
        <HeaderAbout v-if="isDesktop" />
        <div class="content about">
          <Article :list="articles.article" :title="articles.title_" />
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
  data() {
    return {
      isDesktop: true,
      articles: [],
    }
  },
  created() {
    if (process.browser) {
      this.onResize()
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
      window.addEventListener('resize', this.onResize)
    })
    await this.setArticle()
  },
  methods: {
    onResize() {
      if (window.innerWidth > 1100) {
        this.isDesktop = true
      } else {
        this.isDesktop = false
      }
    },
    async setArticle() {
      try {
        const article = (await this.$axios.get('data')).data
        this.articles = article.articles.redMiles
      } catch (error) {
        console.log(error.message)
      }
    },
  },
}
</script>
