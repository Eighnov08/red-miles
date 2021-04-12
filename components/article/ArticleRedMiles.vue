<template>
  <div class="content-wrapper">
    <div class="title_">About RED MILES</div>
    <div class="article-wrapper">
      <div
        v-for="(item, index) in [
          {
            title: 'Data Population',
            desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet aliquet lacus. Nunc blandit libero augue, quis mollis neque vehicula eget.',
            copyBtn: 'Etiam egestas nibh eget maximus porttitor.',
          },
          {
            title: 'Perdiction Method',
            desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet aliquet lacus. Nunc blandit libero augue, quis mollis neque vehicula eget.',
            copyBtn: 'Etiam egestas nibh eget maximus porttitor.',
          },
          {
            title: 'Benchmarking Method',
            desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet aliquet lacus. Nunc blandit libero augue, quis mollis neque vehicula eget.',
            copyBtn: 'Etiam egestas nibh eget maximus porttitor.',
          },
        ]"
        :key="index"
        class="article"
      >
        <h2 class="title-article">{{ item.title }}</h2>
        <p class="desc">
          {{ item.desc }}
        </p>
        <a href="">{{ item.copyBtn }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
