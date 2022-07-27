<template>
  <!-- Banner
================================================== -->
  <div
    class="main-search-container centered"
    data-background-image="images/banner-main-search.jpg"
  >
    <div class="main-search-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>
              Find Nearby
              <!-- Typed words can be configured in script settings at the bottom of this HTML file -->
              <span class="typed-words"></span>
            </h2>
            <h4>Expolore top-rated attractions, activities and more</h4>

            <div class="main-search-input search__location">
              <div class="main-search-input-item location">
                <div id="autocomplete-container">
                  <input
                    id="autocomplete-input"
                    type="text"
                    placeholder="Location"
                    v-model="location"
                  />
                </div>
                <span class="location-icon"
                  ><i class="fa fa-map-marker"></i
                ></span>
              </div>

              <button class="button">Search</button>
              <div
                class="list__location"
                v-if="location && listLocation.length > 0"
              >
                <div
                  class="location__item"
                  v-for="(location, index) in listLocation"
                  :key="index"
                  @click="handleClickLocation(location._id)"
                >
                  <span class="im im-icon-Location-2"></span>
                  <span>{{ location.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Features Categories -->
        <div class="row">
          <div class="col-md-12">
            <h5 class="highlighted-categories-headline">
              Or browse featured categories:
            </h5>

            <div class="highlighted-categories">
              <!-- Box -->
              <router-link
                to="/list-room-filter/kitchen"
                class="highlighted-category"
              >
                <i class="im im-icon-Home"></i>
                <h4>Kitchen</h4>
              </router-link>

              <!-- Box -->
              <router-link
                to="/list-room-filter/pool"
                class="highlighted-category"
              >
                <i class="im im-icon-Hamburger"></i>
                <h4>Pool</h4>
              </router-link>

              <!-- Box -->
              <router-link
                to="/list-room-filter/gym"
                class="highlighted-category"
              >
                <i class="im im-icon-Electric-Guitar"></i>
                <h4>Gym</h4>
              </router-link>

              <!-- Box -->
              <router-link
                to="/list-room-filter/hotTub"
                class="highlighted-category"
              >
                <i class="im im-icon-Dumbbell"></i>
                <h4>Tubs</h4>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Featured Categories - End -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const location = ref("");
    const router = useRouter();
    watch(location, (newLocation) => {
      store.dispatch("location/getListLocationActions", newLocation);
    });

    const listLocation = computed(() => store.state.location.listLocation);

    const handleClickLocation = (locationId) => {
      router.push(`/list-room/${locationId}`);
    };

    return {
      location,
      listLocation,
      handleClickLocation,
    };
  },
};
</script>

<style lang='scss'>
.location-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  padding: 10px;
  background: #fff;
  z-index: 102;
}
.search__location {
  position: relative;
  .list__location {
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 123;
    font-size: 18px;
    width: 100%;
    background-color: #fff;
    padding: 10px 10px;
    border-radius: 20px;
    -webkit-box-shadow: 1px 7px 15px 1px rgba(0, 0, 0, 0.74);
    box-shadow: 1px 7px 15px 1px rgba(0, 0, 0, 0.74);
    .location__item {
      padding: 10px 20px;
      cursor: pointer;
      &:hover {
        background-color: rgb(248, 240, 240);
      }
      span {
        margin: 0 5px 0 0;
      }
    }
  }
}
</style>