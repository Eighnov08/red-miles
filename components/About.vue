<template>
  <div class="content-wrapper">
    <!-- <div class="title_">about</div> -->
    <div class="title_">{{ about.xlHome.title_ }}</div>
    <div class="article-wrapper">
      <div
        v-for="(item, index) in about.xlHome.article"
        :key="index"
        class="article"
      >
        <h2 class="title-article">{{ item.title }}</h2>
        <p class="desc">
          {{ item.desc }}
        </p>
        <a :href="item.link">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script>
// const data_ = [
//   {
//     xlHome: {
//       title_: 'About XL HOME',
//       article: [
//         {
//           title: 'Brand Goal & Positioning',
//           desc:
//             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum repudiandae maiores, molestias quibusdam ipsa sunt labore cupiditate quam esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum repudiandae maiores, molestias quibusdam ipsa sunt labore cupiditate quam esse.',
//           link: '',
//         },
//         {
//           title: 'Brand Identity',
//           desc:
//             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum repudiandae maiores, molestias quibusdam ipsa sunt labore cupiditate quam esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum repudiandae maiores, molestias quibusdam ipsa sunt labore cupiditate quam esse.',
//           link: '',
//         },
//         {
//           title: 'Target Audience',
//           desc:
//             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum repudiandae maiores, molestias quibusdam ipsa sunt labore cupiditate quam esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum repudiandae maiores, molestias quibusdam ipsa sunt labore cupiditate quam esse.',
//           link: '',
//         },
//       ],
//     },
//   },
// ]
import axios from 'axios'
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get(
      'http://redcomm-betatest.com/users/fajar/data.json'
    )
    console.log(data)
  },
  data() {
    return {
      about: [],
    }
  },
  // async fetch() {
  //   this.about = await fetch(
  //     'http://redcomm-betatest.com/users/fajar/data.json'
  //   ).then((res) => res.json())
  // },
}
</script>
