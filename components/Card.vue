<template>
  <div>
    <div v-if="isDesktop" class="card">
      <v-select
        v-for="(item, index) in dropdown"
        :key="index"
        v-model="item.value"
        :options="item.options"
        :placeholder="item.placeholder"
      ></v-select>
      <div class="file-wrapper">
        <font-awesome-icon
          class="plus-circles"
          :icon="['fas', 'plus-circle']"
          @click="chooseFile()"
        />
        <input id="select-file" type="file" />
        <h2>Add your files</h2>
        <p>Add up to 10 MB</p>
      </div>
      <nuxt-link to="/detail/xl" class="send">
        <button type="submit" class="submit">Send</button></nuxt-link
      >
    </div>
    <div v-if="!isDesktop" class="card">
      <div class="hello">Hi! Designer, welcome to Red Miles.</div>
      <v-select
        v-for="(item, index) in dropdownMobile"
        :key="index"
        v-model="item.value"
        :options="item.options"
        :placeholder="item.placeholder"
      ></v-select>
      <div class="file-wrapper">
        <font-awesome-icon
          class="plus-circles"
          :icon="['fas', 'plus-circle']"
          @click="chooseFile()"
        />
        <input id="select-file" type="file" />
        <h2>Add your files</h2>
        <p>Add up to 10 MB</p>
      </div>
      <nuxt-link to="/detail/xl" class="send">
        <button type="submit" class="submit">Send</button></nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: [
        {
          value: '',
          options: ['Designer', 'Developer', 'Content Writer'],
          placeholder: "I'm a",
        },
        {
          value: '',
          options: ['XL Home', 'Joyday', 'Grab'],
          placeholder: 'Select Brand',
        },
      ],
      dropdownMobile: [
        {
          value: '',
          options: ['XL Home', 'Joyday', 'Grab'],
          placeholder: 'Select Brand',
        },
      ],
      isDesktop: true,
    }
  },
  created() {
    if (process.browser) {
      this.onResize()
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    chooseFile() {
      document.getElementById('select-file').click()
    },
    onResize() {
      if (window.innerWidth > 1100) {
        this.isDesktop = true
      } else {
        this.isDesktop = false
      }
    },
  },
}
</script>
