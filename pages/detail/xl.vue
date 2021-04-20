<template>
  <div class="container-fluid">
    <div class="container">
      <div class="about">
        <HeaderAbout />
        <div class="content statistic">
          <CardImg />
          <CardSosmed />
          <CardAudience
            :list="audiences.percentFromPopulation"
            :malePercent="audiences.malePercent"
            :femalePercent="audiences.femalePercent"
          />
          <CardOptimumPost
            :list="optimumPostReach.time"
            :brand="optimumPostReach.brand"
            :title="optimumPostReach.title"
          />
          <CardOptimumPost
            :list="optimumPostER.time"
            :brand="optimumPostER.brand"
            :title="optimumPostER.title"
          />
        </div>
        <div class="btn-wrapper_">
          <BtnFind />
          <BtnBack class="for-desktop" />
        </div>
      </div>
    </div>
    <NavDetail />
  </div>
</template>

<script>
import CardImg from '@/components/statistic/CardImg'
import CardSosmed from '@/components/statistic/CardSosmed'
import CardAudience from '@/components/statistic/CardAudience'
import CardOptimumPost from '@/components/statistic/CardOptimumPost'
import BtnBack from '@/components/button/BtnBack'
import BtnFind from '@/components/button/BtnFind'
import NavDetail from '@/components/navigation/NavDetail'
export default {
  components: {
    CardImg,
    CardSosmed,
    CardAudience,
    CardOptimumPost,
    BtnBack,
    BtnFind,
    NavDetail,
  },
  data() {
    return {
      audiences: [],
      optimumPostReach: [],
      optimumPostER: [],
    }
  },
  async mounted() {
    await this.setCardAudience()
    await this.setCardOptimumPost()
  },
  methods: {
    async setCardAudience() {
      try {
        const audience_ = (await this.$axios.get('db')).data
        this.audiences = audience_.card.audience
      } catch (error) {
        console.log(error.message)
      }
    },
    async setCardOptimumPost() {
      try {
        const optimumPost_ = (await this.$axios.get('db')).data
        this.optimumPostReach = optimumPost_.card.optimumPosts.reach
        this.optimumPostER = optimumPost_.card.optimumPosts.er
      } catch (error) {
        console.log(error.message)
      }
    },
  },
}
</script>
