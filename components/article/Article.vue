<template>
  <div class="content-wrapper">
    <div class="title_">{{ title }}</div>
    <div class="article-wrapper">
      <div v-for="(item, index) in list" :key="index" class="article">
        <h2 class="title-article">{{ item.title }}</h2>
        <p class="desc">
          {{ item.desc }}
        </p>
        <a :href="item.link">{{ item.copyBtn }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
