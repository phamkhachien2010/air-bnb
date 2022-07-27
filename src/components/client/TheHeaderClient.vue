<template>
  <!-- Header Container
================================================== -->
  <header id="header-container">
    <!-- Header -->
    <div id="header">
      <div class="container">
        <!-- Left Side Content -->
        <div class="left-side">
          <!-- Logo -->
          <div id="logo">
            <router-link to="/"
              ><img
                src="images/logo2.png"
                data-sticky-logo="images/logo.png"
                alt=""
            /></router-link>
          </div>

          <!-- Mobile Navigation -->
          <div class="mmenu-trigger">
            <button class="hamburger hamburger--collapse" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <!-- Main Navigation -->
          <nav id="navigation" class="style-1">
            <ul id="responsive">
              <li>
                <router-link to="/">Home</router-link>
              </li>

              <li>
                <router-link to="/blog">Blog</router-link>
              </li>

              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </nav>
          <div class="clearfix"></div>
          <!-- Main Navigation / End -->
        </div>
        <!-- Left Side Content / End -->

        <!-- Right Side Content / End -->
        <div class="right-side">
          <div class="header-widget">
            <!-- User Menu -->
            <span v-if="!userLogin.user">
              <router-link to="login" class="sign-in popup-with-zoom-anim"
                ><i class="sl sl-icon-login"></i> Log In</router-link
              >
              <router-link to="sign-up" class="sign-in popup-with-zoom-anim"
                ><i class="sl sl-icon-login"></i> Sign Up</router-link
              >
            </span>

            <span v-else>
              <div class="user-menu">
                <div class="user-name">
                  <span>
                    <img
                      v-if="userLogin.user.avatar"
                      :src="userLogin.user.avatar"
                      alt=""
                    />
                    <img
                      v-else
                      src="images/dashboard-avatar.jpg"
                      alt=""
                    /> </span
                  >Hi, {{ userLogin.user.name }}
                </div>
                <ul>
                  <li>
                    <router-link to="/dashboard"
                      ><i class="sl sl-icon-settings"></i>
                      Dashboard</router-link
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="sl sl-icon-envelope-open"></i> Messages</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-calendar-check-o"></i> Bookings</a
                    >
                  </li>
                  <li>
                    <router-link to="/view-ticket-detail"
                      ><i class="fa fa-calendar-check-o"></i>
                      Profile</router-link
                    >
                  </li>
                  <li>
                    <span class="logout" @click="handleLogOut"
                      ><i class="sl sl-icon-power"></i> Logout</span
                    >
                  </li>
                </ul>
              </div>

              <a
                v-if="userLogin.user.type === 'ADMIN'"
                href="dashboard-add-listing.html"
                class="button border with-icon"
                >Add Listing <i class="sl sl-icon-plus"></i
              ></a>
            </span>
          </div>
        </div>
        <!-- Right Side Content / End -->
      </div>
    </div>
    <!-- Header / End -->
  </header>
  <div class="clearfix"></div>
  <!-- Header Container / End -->
</template>

<script>
import { USER_LOGIN } from "@/configs";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();

    store.dispatch("auth/loadUserLoginAction");
    const userLogin = computed(() => store.state.auth.userLogin);

    const handleLogOut = () => {
      localStorage.removeItem(USER_LOGIN);
      store.dispatch("auth/loadUserLoginAction");
    };

    return {
      userLogin,
      handleLogOut,
    };
  },
};
</script>

<style>
.logout {
  padding: 6px 15px;
}
</style>