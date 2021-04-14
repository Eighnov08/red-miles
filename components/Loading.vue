<template lang="html">
  <div v-if="loading" class="loading-page">
    <div class="loading"></div>
    <img src="~/static/store/images/loading.svg" class="for-desktop" />
    <img src="~/static/store/images/loading-mobile.svg" class="for-mobile" />
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
