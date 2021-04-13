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
            <div class="percentage">72%</div>
          </div>
          <div class="gender-wrapper">
            <div class="box female">
              <font-awesome-icon class="fa-venus" :icon="['fas', 'venus']" />
              <p>Female</p>
            </div>
            <div class="percentage">80%</div>
          </div>
        </div>
        <div class="population">
          <div class="box_">
            <div class="age">17-24</div>
            <p class="percentage_">41,4% from population</p>
            <img src="~/static/store/images/icon-human.png" alt="" />
          </div>
          <div class="box_">
            <div class="age">25-34</div>
            <p class="percentage_">30,4% from population</p>
            <img src="~/static/store/images/icon-human.png" alt="" />
          </div>
          <div class="box_">
            <div class="age">13-17</div>
            <p class="percentage_">17,2% from population</p>
            <img src="~/static/store/images/icon-human.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
