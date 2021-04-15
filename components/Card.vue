<template>
  <div>
    <div v-if="isDesktop" class="card">
      <InputSelect
        :options="['Designer', 'Content Writer']"
        :default="'I\'m a'"
        class="select"
      />
      <InputSelect
        :options="['XL Home', 'Joyday', 'Grab', 'Starbucks', 'Freebees']"
        :default="'Select Brand'"
        class="select"
      />
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
      <InputSelect
        :options="['XL Home', 'Joyday', 'Grab', 'Starbucks', 'Freebees']"
        :default="'Select Brand'"
        class="select"
      />
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
import InputSelect from '@/components/input/Select.vue'

export default {
  components: {
    InputSelect,
  },
  data() {
    return {
      value: {
        jobs: '',
        brand: '',
      },
      data: {
        jobs: [
          {
            value: 'Designer',
            options: 'Designer',
          },
          {
            value: 'Developer',
            options: 'Developer',
          },
          {
            value: 'Content Writer',
            options: 'Content Writer',
          },
        ],
        brands: [
          {
            value: 'XL Home',
            options: 'XL Home',
          },
          {
            value: 'Joyday',
            options: 'Joyday',
          },
          {
            value: 'Grab',
            options: 'Grab',
          },
        ],
      },
      // dropdown: [
      //   {
      //     value: '',
      //     options: ['Designer', 'Developer', 'Content Writer'],
      //     placeholder: "I'm a",
      //   },
      //   {
      //     value: '',
      //     options: ['XL Home', 'Joyday', 'Grab'],
      //     placeholder: 'Select Brand',
      //   },
      // ],
      // dropdownMobile: [
      //   {
      //     value: '',
      //     options: ['XL Home', 'Joyday', 'Grab'],
      //     placeholder: 'Select Brand',
      //   },
      // ],
      isDesktop: true,
    }
  },
  created() {
    if (process.client) {
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
