<template>
  <!-- Content
================================================== -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3 class="headline centered margin-top-75">
          <strong class="headline-with-separator">Popular Categories</strong>
        </h3>
      </div>

      <div class="col-md-12">
        <div class="categories-boxes-container margin-top-5 margin-bottom-30">
          <!-- Box -->
          <router-link
            to="/list-room-filter/elevator"
            class="category-small-box"
          >
            <i class="im im-icon-Hamburger"></i>
            <h4>Elevator</h4>
            <span class="category-box-counter">15</span>
          </router-link>

          <!-- Box -->
          <router-link to="/list-room-filter/hotTub" class="category-small-box">
            <i class="im im-icon-Sleeping"></i>
            <h4>Hot tub</h4>
            <span class="category-box-counter">15</span>
          </router-link>

          <!-- Box -->
          <router-link to="/list-room-filter/pool" class="category-small-box">
            <i class="im im-icon-Shopping-Bag"></i>
            <h4>Pools</h4>
            <span class="category-box-counter">15</span>
          </router-link>

          <!-- Box -->
          <router-link
            to="/list-room-filter/indoorFireplace"
            class="category-small-box"
          >
            <i class="im im-icon-Cocktail"></i>
            <h4>Fireplace</h4>
            <span class="category-box-counter">15</span>
          </router-link>

          <!-- Box -->
          <router-link to="/list-room-filter/gym" class="category-small-box">
            <i class="im im-icon-Electric-Guitar"></i>
            <h4>Gym</h4>
            <span class="category-box-counter">21</span>
          </router-link>

          <!-- Box -->
          <router-link
            to="/list-room-filter/kitchen"
            class="category-small-box"
          >
            <i class="im im-icon-Dumbbell"></i>
            <h4>Kitchen</h4>
            <span class="category-box-counter">28</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- Category Boxes / End -->
</template>

<script>
export default {};
</script>

<style>
</style>