<template>
  <the-header-client />
  <!-- Titlebar
================================================== -->
  <div id="titlebar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Booking Processed</h2>

          <!-- Breadcrumbs -->
          <nav id="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li>Booking Processed</li>
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
      <div class="col-md-12">
        <div class="booking-confirmation-page">
          <i class="fa fa-check-circle"></i>
          <h2 class="margin-top-30">Thanks for your booking!</h2>
          <p>You'll receive a confirmation email at mail@example.com</p>
          <router-link to="/view-ticket-detail" class="button margin-top-30"
            >View Invoice</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Container / End -->

  <the-footer-client />
</template>

<script>
import TheHeaderClient from "@/components/client/TheHeaderClient.vue";
import TheFooterClient from "@/components/client/TheFooterClient.vue";
export default {
  components: { TheHeaderClient, TheFooterClient },
};
</script>

<style>
</style>