<template>
  <the-header-client />
  <!-- Invoice -->
  <div v-for="(ticket, index) in listTicket" :key="index">
    <ticket-item :ticket="ticket" />
  </div>
  <the-footer-client />
</template>

<script>
import TheHeaderClient from "@/components/client/TheHeaderClient.vue";
import TheFooterClient from "@/components/client/TheFooterClient.vue";
import { USER_LOGIN } from "@/configs";
import { useStore } from "vuex";
import { computed } from "vue";
import TicketItem from "@/components/client/ticket/TicketItem.vue";
export default {
  components: { TheHeaderClient, TheFooterClient, TicketItem },
  setup() {
    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
    const store = useStore();
    store.dispatch("ticket/getTicketsByUserAction", userLogin.user._id);

    const listTicket = computed(() => store.state.ticket.listTickets);

    return {
      listTicket,
    };
  },
};
</script>

<style lang='scss'>
.ticket__detail {
  background: white;
  width: auto;
  max-width: 900px;
  padding: 60px;
  margin: 0px auto 60px auto;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 23px -7px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 0px 0px 23px -7px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 23px -7px rgba(0, 0, 0, 0.68);
  margin-top: 20px;
}
</style>