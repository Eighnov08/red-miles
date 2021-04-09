<template>
  <div class="content-wrapper">
    <div class="title_">about</div>
    <!-- <div class="title_">{{ title_ }}</div> -->
    <div class="article-wrapper">
      <div class="article">
        <!-- <h2 class="title-article">{{ title }}</h2> -->
        <!-- <p class="desc">
          {{ item.desc }}
        </p>
        <a :href="item.link">Learn More</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    title_: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    categoryName: {
      type: String,
      default: '',
    },
    timeRead: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
}
</script>
