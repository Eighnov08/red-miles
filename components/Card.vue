<template>
  <div class="card">
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
    <div class="title-mobile">
      <h1>Hi! Welcome to Red Miles. I'm a?</h1>
    </div>
    <div class="menu">
      <div class="designer">
        <a href="#" class="custom-card">
          <img
            class="card-img-top"
            src="~/assets/images/pencil.svg"
            alt="pencil"
          />
          <div class="card-body">
            <h5 class="card-title">Designer</h5>
          </div>
        </a>
      </div>
      <div class="copy-writer">
        <a href="#" class="custom-card">
          <img
            class="card-img-top"
            src="~/assets/images/bulpoint.svg"
            alt="pencil"
          />
          <div class="card-body">
            <h5 class="card-title">Copy Writer</h5>
          </div>
        </a>
      </div>
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
    }
  },
  methods: {
    chooseFile() {
      document.getElementById('select-file').click()
    },
  },
}
</script>
