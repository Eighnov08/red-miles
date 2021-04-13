<template>
  <div class="container-fluid">
    <div class="container">
      <div class="about">
        <HeaderAbout />
        <div class="content statistic">
          <CardImg />
          <CardSosmed />
          <CardAudience />
          <CardOptimumPostReach />
          <CardOptimumPostER />
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
import CardOptimumPostReach from '@/components/statistic/CardOptimumPostReach'
import CardOptimumPostER from '@/components/statistic/CardOptimumPostER'
import BtnBack from '@/components/button/BtnBack'
import BtnFind from '@/components/button/BtnFind'
import NavDetail from '@/components/navigation/NavDetail'
export default {
  components: {
    CardImg,
    CardSosmed,
    CardAudience,
    CardOptimumPostReach,
    CardOptimumPostER,
    BtnBack,
    BtnFind,
    NavDetail,
  },
}
</script>
