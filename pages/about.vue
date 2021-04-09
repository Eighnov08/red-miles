<template>
  <div class="container container--about">
    <HeaderDetail />
    <div class="content content--about">
      <About v-for="(xlHome, index) in pageData.xlHome" :key="index" />
    </div>
    <div class="btn-back">
      <font-awesome-icon class="arrow-left" :icon="['fas', 'arrow-left']" />
      <p>Back</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ store, error, $config: { apiUrl } }) {
    let pageData
    try {
      const url = apiUrl
      pageData = (await axios.get(url)).data
      console.log(pageData.xlHome.article)
    } catch (err) {
      console.log('[file_name.vue]', err)
    }
    return { pageData }
  },
}
</script>
