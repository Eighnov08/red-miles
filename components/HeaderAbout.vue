<template>
  <div class="header header-detail">
    <div class="copy">
      <Icon name="red-miles-red" />
      <p>
        Image to Reach & ER prediction with <br />machine learning in 2 quick
        steps.
      </p>
    </div>
    <div class="btn-wrapper">
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
export default {}
</script>
