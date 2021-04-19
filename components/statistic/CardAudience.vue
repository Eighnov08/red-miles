<template>
  <div class="box_">
    <div class="copy-wrapper">
      <p class="brand">Audience</p>
      <p class="type">On Facebook</p>
    </div>
    <div class="card_">
      <div class="card-audience">
        <div class="card-wrapper">
          <div class="gender-wrapper">
            <div class="box male">
              <font-awesome-icon class="fa-mars" :icon="['fas', 'mars']" />
              <p>Male</p>
            </div>
            <div class="percentage">{{ malePercent }}</div>
          </div>
          <div class="gender-wrapper">
            <div class="box female">
              <font-awesome-icon class="fa-venus" :icon="['fas', 'venus']" />
              <p>Female</p>
            </div>
            <div class="percentage">{{ femalePercent }}</div>
          </div>
        </div>
        <div class="population">
          <div v-for="(item, index) in list" :key="index" class="box_">
            <div class="age">{{ item.age }}</div>
            <p class="percentage_">{{ item.percent }} from population</p>
            <img src="~/static/store/images/icon-human.png" alt="" />
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
    malePercent: {
      type: String,
      default: '',
    },
    femalePercent: {
      type: String,
      default: '',
    },
  },
}
</script>
