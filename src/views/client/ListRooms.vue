<template>
  <the-header-client />
  <!-- Titlebar
================================================== -->
  <div id="titlebar" class="gradient">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>{{ locationById.name }}</h2>
          <span>{{ listRoomByLocation.length }} results</span>

          <!-- Breadcrumbs -->
          <nav id="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li>List-rooms</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Content
================================================== -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- Sorting - Filtering Section -->
        <div class="row margin-bottom-25 margin-top-30">
          <div class="col-md-6">
            <div class="fullwidth-filters">
              <!-- Panel Dropdown -->
              <div class="panel-dropdown wide float-right">
                <a href="#">More Filters</a>
                <div class="panel-dropdown-content checkboxes">
                  <!-- Checkboxes -->
                  <div class="row">
                    <div class="col-md-6">
                      <input id="check-a" type="checkbox" name="check" />
                      <label for="check-a">Elevator in building</label>

                      <input id="check-b" type="checkbox" name="check" />
                      <label for="check-b">Friendly workspace</label>

                      <input id="check-c" type="checkbox" name="check" />
                      <label for="check-c">Instant Book</label>

                      <input id="check-d" type="checkbox" name="check" />
                      <label for="check-d">Wireless Internet</label>
                    </div>

                    <div class="col-md-6">
                      <input id="check-e" type="checkbox" name="check" />
                      <label for="check-e">Free parking on premises</label>

                      <input id="check-f" type="checkbox" name="check" />
                      <label for="check-f">Free parking on street</label>

                      <input id="check-g" type="checkbox" name="check" />
                      <label for="check-g">Smoking allowed</label>

                      <input id="check-h" type="checkbox" name="check" />
                      <label for="check-h">Events</label>
                    </div>
                  </div>

                  <!-- Buttons -->
                  <div class="panel-buttons">
                    <button class="panel-cancel">Cancel</button>
                    <button class="panel-apply">Apply</button>
                  </div>
                </div>
              </div>
              <!-- Panel Dropdown / End -->

              <!-- Panel Dropdown-->
              <div class="panel-dropdown float-right">
                <a href="#">Distance Radius</a>
                <div class="panel-dropdown-content">
                  <input
                    class="distance-radius"
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value="50"
                    data-title="Radius around selected destination"
                  />
                  <div class="panel-buttons">
                    <button class="panel-cancel">Disable</button>
                    <button class="panel-apply">Apply</button>
                  </div>
                </div>
              </div>
              <!-- Panel Dropdown / End -->

              <!-- Sort by -->
              <div class="sort-by">
                <div class="sort-by-select">
                  <select
                    data-placeholder="Default order"
                    class="chosen-select-no-single"
                  >
                    <option>Default Order</option>
                    <option>Highest Rated</option>
                    <option>Most Reviewed</option>
                    <option>Newest Listings</option>
                    <option>Oldest Listings</option>
                  </select>
                </div>
              </div>
              <!-- Sort by / End -->
            </div>
          </div>
        </div>
        <!-- Sorting - Filtering Section / End -->

        <div class="row">
          <!-- Listing Item -->
          <div
            v-for="(room, index) in listRoomByLocation"
            :key="index"
            class="col-lg-12 col-md-12"
          >
            <div
              @click="handleClickToRoomDetail(room._id)"
              class="listing-item-container list-layout"
            >
              <div class="listing-item">
                <!-- Image -->
                <div class="listing-item-image">
                  <img :src="room.image" alt="" />
                  <div class="room__service">
                    <span v-if="room.gym" class="room__service__item">Gym</span>
                    <span v-if="room.hotTub" class="room__service__item"
                      >Tub</span
                    >
                    <span v-if="room.pool" class="room__service__item"
                      >Pool</span
                    >
                    <span v-if="room.kitchen" class="room__service__item"
                      >Kitchen</span
                    >
                  </div>
                </div>

                <!-- Content -->
                <div class="listing-item-content">
                  <div class="listing-badge now-open">Now Open</div>

                  <div class="listing-item-inner">
                    <h3>{{ room.name }} <i class="verified-icon"></i></h3>
                    <span
                      >{{ room.locationId.province }}-{{
                        room.locationId.country
                      }}
                    </span>
                    <div class="star-rating" data-rating="3.5">
                      <div class="rating-counter">(12 reviews)</div>
                    </div>
                  </div>

                  <span class="like-icon"></span>
                </div>
              </div>
            </div>
          </div>
          <!-- Listing Item / End -->
        </div>

        <!-- Pagination -->
        <div class="clearfix"></div>
        <div class="row">
          <div class="col-md-12">
            <!-- Pagination -->
            <div class="pagination-container margin-top-20 margin-bottom-40">
              <nav class="pagination">
                <ul>
                  <li><a href="#" class="current-page">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li>
                    <a href="#"><i class="sl sl-icon-arrow-right"></i></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <!-- Pagination / End -->
      </div>
    </div>
  </div>
  <the-footer-client />
</template>

<script>
import TheHeaderClient from "@/components/client/TheHeaderClient.vue";
import TheFooterClient from "@/components/client/TheFooterClient.vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
export default {
  components: { TheHeaderClient, TheFooterClient },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const locationById = computed(() => store.state.location.locationById);
    store.dispatch("location/getLocationDetailAction", route.params.locationId);
    store.dispatch(
      "room/getListRoomByLocationActions",
      route.params.locationId
    );
    const listRoomByLocation = computed(
      () => store.state.room.listRoomByLocation
    );

    const handleClickToRoomDetail = (roomId) => {
      router.push(`/room-detail/${roomId}`);
    };

    return {
      locationById,
      listRoomByLocation,
      handleClickToRoomDetail,
    };
  },
};
</script>

<style lang='scss'>
.room__service {
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  z-index: 10;
  .room__service__item {
    background: #f91942;
    text-transform: uppercase;
    font-size: 9px;
    letter-spacing: 2.5px;
    border-radius: 50px;
    color: #fff;
    font-weight: 400;
    line-height: 14px;
    padding: 7px 16px;
    margin-right: 5px;
    text-align: center;
  }
}
</style>