<template>
  <the-header-client />
  <!-- Titlebar
================================================== -->
  <div id="titlebar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Booking</h2>

          <!-- Breadcrumbs -->
          <nav id="breadcrumbs">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li>Booking</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Content
================================================== -->

  <!-- Container -->
  <div class="container">
    <div class="row">
      <!-- Content
		================================================== -->
      <div class="col-lg-8 col-md-8 padding-right-30">
        <h3 class="margin-top-0 margin-bottom-30">Personal Details</h3>

        <div class="row">
          <div class="col-md-6">
            <label>First Name</label>
            <input type="text" value="" />
          </div>

          <div class="col-md-6">
            <label>Last Name</label>
            <input type="text" value="" />
          </div>

          <div class="col-md-6">
            <div class="input-with-icon medium-icons">
              <label>E-Mail Address</label>
              <input type="text" value="" />
              <i class="im im-icon-Mail"></i>
            </div>
          </div>

          <div class="col-md-6">
            <div class="input-with-icon medium-icons">
              <label>Phone</label>
              <input type="text" value="" />
              <i class="im im-icon-Phone-2"></i>
            </div>
          </div>
        </div>

        <button
          @click="handleBookingRoom"
          class="button booking-confirmation-btn margin-top-40 margin-bottom-65"
        >
          Confirm and Pay
        </button>
      </div>

      <!-- Sidebar
		================================================== -->
      <div class="col-lg-4 col-md-4 margin-top-0 margin-bottom-60">
        <!-- Booking Summary -->
        <div class="listing-item-container compact order-summary-widget">
          <div class="listing-item">
            <img :src="room.image" alt="" />

            <div class="listing-item-content">
              <div class="numerical-rating" data-rating="5.0"></div>
              <h3>{{ room.name }}</h3>
              <span
                >{{ room?.locationId.province }}-{{
                  room?.locationId.country
                }}</span
              >
            </div>
          </div>
        </div>
        <div class="boxed-widget opening-hours summary margin-top-0">
          <h3><i class="fa fa-calendar-check-o"></i> Booking Summary</h3>
          <ul>
            <li>
              From <span>{{ from }}</span>
            </li>
            <li>
              To <span>{{ to }}</span>
            </li>
            <li>
              Guests
              <span class="d-flex">
                <span v-if="adults">{{ adults }} Adults </span>
                <span v-if="children">+ {{ children }} Children</span>
              </span>
            </li>
            <li class="total-costs">
              Total Cost <span>{{ room.price }} đ</span>
            </li>
          </ul>
        </div>
        <!-- Booking Summary / End -->
      </div>
    </div>
  </div>
  <!-- Container / End -->
  <the-footer-client />
</template>

<script>
import TheHeaderClient from "@/components/client/TheHeaderClient.vue";
import TheFooterClient from "@/components/client/TheFooterClient.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  components: { TheHeaderClient, TheFooterClient },
  setup() {
    const store = useStore();
    const room = computed(() => store.state.room.roomById);
    const route = useRoute();
    const router = useRouter();

    const adults = computed(() => store.state.room.adults);
    const children = computed(() => store.state.room.children);
    const from = computed(() => store.state.room.dateFrom);
    const to = computed(() => store.state.room.dateTo);

    store.dispatch("room/setInfoBookingBookingRoomAction");

    const checkIn = computed(() => store.state.room.checkIn);
    const checkOut = computed(() => store.state.room.checkOut);

    const handleBookingRoom = () => {
      const bookingInfo = {
        roomId: route.params.roomId,
        checkIn: checkIn.value,
        checkOut: checkOut.value,
      };
      store.dispatch("room/bookingRoomAction", { bookingInfo, router });
    };

    return {
      room,
      adults,
      children,
      from,
      to,
      handleBookingRoom,
    };
  },
};
</script>

<style>
</style>