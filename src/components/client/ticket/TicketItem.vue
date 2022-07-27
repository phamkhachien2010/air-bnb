<template>
  <div class="ticket__detail">
    <!-- Header -->
    <p id="details">
      <strong>Ticket:</strong> {{ ticket._id }} <br />
      <strong>From:</strong> {{ from }} <br />
      <strong>To:</strong> {{ to }} <br />
    </p>

    <!-- Client & Supplier -->
    <div class="row">
      <div class="col-md-12">
        <h2>Hotel</h2>
      </div>

      <div class="col-md-6">
        <strong class="margin-bottom-5">{{ ticket.roomId.name }}</strong>
        <p class="m-0">{{ location.name }}</p>
        <p>{{ location.province }}-{{ location.country }}</p>
      </div>
    </div>

    <!-- Invoice -->
    <div class="row">
      <div class="col-md-4 col-md-offset-8">
        <table id="totals">
          <tr>
            <th>Total Due:</th>
            <th>
              <span> {{ ticket.roomId.price }}</span>
            </th>
          </tr>
        </table>
      </div>
    </div>

    <!-- Footer -->
    <div class="row">
      <div class="col-md-12">
        <ul id="footer">
          <li><span>www.example.com</span></li>
          <li>office@example.com</li>
          <li>(123) 123-456</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { formatDateDayMonthYear } from "@/utils/formatDate";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  props: {
    ticket: {
      type: Object,
    },
  },
  setup(props) {
    const store = useStore();
    const { ticket } = toRefs(props);
    const { checkIn, checkOut, roomId } = ticket.value;
    const from = formatDateDayMonthYear(checkIn);
    const to = formatDateDayMonthYear(checkOut);
    const locationId = roomId.locationId;

    store.dispatch("location/getLocationDetailAction", locationId);
    const location = computed(() => store.state.location.locationById);

    return {
      from,
      to,
      location,
    };
  },
};
</script>

<style>
</style>