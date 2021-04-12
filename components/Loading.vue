<template lang="html">
  <div v-if="loading" class="loading-page">
    <div class="loading"></div>
    <img src="~assets/images/loading.svg" class="for-desktop" />
    <img src="~assets/images/loading-mobile.svg" class="for-mobile" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss">
.loading-page {
  position: relative;
  z-index: 9999;
  .loading {
    position: absolute;
    top: 43%;
    left: 48%;
    border-bottom: 6px solid rgba(250, 250, 250, 0.5);
    border-left: 6px solid rgba(250, 250, 250, 0.5);
    border-right: 6px solid rgba(250, 250, 250, 0.5);
    border-top: 6px solid rgba(250, 250, 250, 0.8);
    border-radius: 100%;
    height: 50px;
    width: 50px;
    animation: rot 0.6s infinite linear;
    @media only screen and (max-width: 1024px) {
      top: 35%;
    }
  }
  @keyframes rot {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
