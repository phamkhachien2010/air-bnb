<template>
  <the-header-client />
  <!-- Titlebar
================================================== -->
  <div id="titlebar" class="gradient">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>ListRoom</h2>
          <span>List rooms have {{ id }}</span>

          <!-- Breadcrumbs -->
          <nav id="breadcrumbs">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li>{{ id }}</li>
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
      <div class="col-lg-9 col-md-8 padding-right-30">
        <div class="row">
          <!-- Listing Item -->
          <div
            v-for="(room, index) in listRoomFilter"
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
                  <span class="tag">{{ id }}</span>
                </div>

                <!-- Content -->
                <div class="listing-item-content">
                  <div class="listing-badge now-open">Now Open</div>

                  <div class="listing-item-inner">
                    <h3>{{ room.name }} <i class="verified-icon"></i></h3>
                    <p class="m-0">{{ room.locationId.name }}</p>
                    <span
                      >{{ room.locationId.province }}-{{
                        room.locationId.country
                      }}</span
                    >
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
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: { TheHeaderClient, TheFooterClient },
  setup() {
    const route = useRoute();
    const store = useStore();
    const router = useRouter();
    const id = route.params.filter;
    store.dispatch("room/getListRoomFilterAction", id);
    const listRoomFilter = computed(() => store.state.room.listRoomFilter);

    const handleClickToRoomDetail = (roomId) => {
      router.push(`/room-detail/${roomId}`);
    };

    return { listRoomFilter, id, handleClickToRoomDetail };
  },
};
</script>

<style>
</style>