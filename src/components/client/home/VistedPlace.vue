<template>
  <!-- Fullwidth Section -->
  <section
    class="fullwidth margin-top-65 padding-top-75 padding-bottom-70"
    data-background-color="#f8f8f8"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="headline centered margin-bottom-45">
            <strong class="headline-with-separator">Most Visited Places</strong>
            <span>Discover Top-Rated Local Businesses</span>
          </h3>
        </div>

        <div class="col-md-12">
          <div class="simple-slick-carousel dots-nav">
            <!-- Listing Item -->
            <div class="carousel-item">
              <div>
                <div class="listing-item-container">
                  <div class="listing-item">
                    <img :src="listRoomFilter[0]?.image" alt="" />

                    <div class="listing-badge now-open">Now Open</div>

                    <div class="listing-item-content">
                      <span class="tag">Eat & Drink</span>
                      <h3>
                        {{ listRoomFilter[0]?.name }}
                        <i class="verified-icon"></i>
                      </h3>
                      <span
                        >{{ listRoomFilter[0]?.locationId.province }}-{{
                          listRoomFilter[0]?.locationId.country
                        }}</span
                      >
                    </div>
                    <span class="like-icon"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div>
                <div class="listing-item-container">
                  <div class="listing-item">
                    <img :src="listRoomFilter[1]?.image" alt="" />

                    <div class="listing-badge now-open">Now Open</div>

                    <div class="listing-item-content">
                      <span class="tag">Eat & Drink</span>
                      <h3>
                        {{ listRoomFilter[1]?.name }}
                        <i class="verified-icon"></i>
                      </h3>
                      <span
                        >{{ listRoomFilter[1]?.locationId.province }}-{{
                          listRoomFilter[1]?.locationId.country
                        }}</span
                      >
                    </div>
                    <span class="like-icon"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div>
                <div class="listing-item-container">
                  <div class="listing-item">
                    <img :src="listRoomFilter[2]?.image" alt="" />

                    <div class="listing-badge now-open">Now Open</div>

                    <div class="listing-item-content">
                      <span class="tag">Eat & Drink</span>
                      <h3>
                        {{ listRoomFilter[2]?.name }}
                        <i class="verified-icon"></i>
                      </h3>
                      <span
                        >{{ listRoomFilter[2]?.locationId.province }}-{{
                          listRoomFilter[2]?.locationId.country
                        }}</span
                      >
                    </div>
                    <span class="like-icon"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div>
                <div class="listing-item-container">
                  <div class="listing-item">
                    <img :src="listRoomFilter[3]?.image" alt="" />

                    <div class="listing-badge now-open">Now Open</div>

                    <div class="listing-item-content">
                      <span class="tag">Eat & Drink</span>
                      <h3>
                        {{ listRoomFilter[3]?.name }}
                        <i class="verified-icon"></i>
                      </h3>
                      <span
                        >{{ listRoomFilter[3]?.locationId.province }}-{{
                          listRoomFilter[3]?.locationId.country
                        }}</span
                      >
                    </div>
                    <span class="like-icon"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div>
                <div class="listing-item-container">
                  <div class="listing-item">
                    <img :src="listRoomFilter[4]?.image" alt="" />

                    <div class="listing-badge now-open">Now Open</div>

                    <div class="listing-item-content">
                      <span class="tag">Eat & Drink</span>
                      <h3>
                        {{ listRoomFilter[4]?.name }}
                        <i class="verified-icon"></i>
                      </h3>
                      <span
                        >{{ listRoomFilter[4]?.locationId.province }}-{{
                          listRoomFilter[4]?.locationId.country
                        }}</span
                      >
                    </div>
                    <span class="like-icon"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div>
                <div class="listing-item-container">
                  <div class="listing-item">
                    <img :src="listRoomFilter[5]?.image" alt="" />

                    <div class="listing-badge now-open">Now Open</div>

                    <div class="listing-item-content">
                      <span class="tag">Eat & Drink</span>
                      <h3>
                        {{ listRoomFilter[5]?.name }}
                        <i class="verified-icon"></i>
                      </h3>
                      <span
                        >{{ listRoomFilter[5]?.locationId.province }}-{{
                          listRoomFilter[5]?.locationId.country
                        }}</span
                      >
                    </div>
                    <span class="like-icon"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div>
                <div class="listing-item-container">
                  <div class="listing-item">
                    <img :src="listRoomFilter[6]?.image" alt="" />

                    <div class="listing-badge now-open">Now Open</div>

                    <div class="listing-item-content">
                      <span class="tag">Eat & Drink</span>
                      <h3>
                        {{ listRoomFilter[6]?.name }}
                        <i class="verified-icon"></i>
                      </h3>
                      <span
                        >{{ listRoomFilter[6]?.locationId.province }}-{{
                          listRoomFilter[6]?.locationId.country
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
        </div>
      </div>
    </div>
  </section>
  <!-- Fullwidth Section / End -->
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    store.dispatch("room/getListRoomFilterAction", "kitchen");

    const listRoomFilter = computed(() => store.state.room.listRoomFilter);

    return { listRoomFilter };
  },
};
</script>

<style>
</style>