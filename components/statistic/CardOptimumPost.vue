<template>
  <div class="box_">
    <div class="copy-wrapper">
      <p class="brand">{{ brand }}</p>
      <p class="type">Optimum Posting Time</p>
    </div>
    <div class="card_">
      <div class="card-audience">
        <div class="card-wrapper">
          <p class="title-reach">
            {{ title }}
          </p>
        </div>
        <div class="population">
          <div v-for="(item, index) in list" :key="index" class="box_">
            <div class="age">{{ item.clock }}</div>
            <p class="percentage_">{{ item.day }}</p>
            <font-awesome-icon class="fa-clock" :icon="['fas', 'clock']" />
          </div>
        </div>
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
    brand: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
