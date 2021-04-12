<template>
  <div class="container">
    <div class="container__about">
      <HeaderAbout />
      <div class="content statistic">
        <div class="box_">
          <div class="copy-wrapper">
            <p class="brand">XL HOME</p>
            <p class="type">brand</p>
          </div>
          <CardImg />
        </div>
        <div class="box_">
          <div class="copy-wrapper">
            <p class="brand">XL HOME</p>
            <p class="type">brand</p>
          </div>
          <div class="card_">
            <CardSosmed />
          </div>
        </div>
        <div class="box_">
          <div class="copy-wrapper">
            <p class="brand">XL HOME</p>
            <p class="type">brand</p>
          </div>
          <div class="card_">
            <CardAudience />
          </div>
        </div>
        <div class="box_">
          <div class="copy-wrapper">
            <p class="brand">XL HOME</p>
            <p class="type">brand</p>
          </div>
          <div class="card_">
            <CardOptimumPostReach />
          </div>
        </div>
        <div class="box_">
          <div class="copy-wrapper">
            <p class="brand">XL HOME</p>
            <p class="type">brand</p>
          </div>
          <div class="card_">
            <CardOptimumPostER />
          </div>
        </div>
      </div>
      <div class="btn-wrapper_">
        <BtnFind />
        <BtnBack />
      </div>
    </div>
  </div>
</template>

<script>
import CardImg from '@/components/statistic/CardImg'
import CardSosmed from '@/components/statistic/CardSosmed'
import CardAudience from '@/components/statistic/CardAudience'
import CardOptimumPostReach from '@/components/statistic/CardOptimumPostReach'
import CardOptimumPostER from '@/components/statistic/CardOptimumPostER'
import BtnBack from '@/components/button/BtnBack'
import BtnFind from '@/components/button/BtnFind'
export default {
  components: {
    CardImg,
    CardSosmed,
    CardAudience,
    CardOptimumPostReach,
    CardOptimumPostER,
    BtnBack,
    BtnFind,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },
}
</script>
