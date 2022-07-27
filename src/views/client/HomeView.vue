<template>
  <div id="wrapper">
    <the-header-client />

    <the-banner />

    <the-categories />

    <visted-place />

    <feed-back />

    <vaction-plan />

    <from-blog />

    <the-footer-client />

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
</template>

<script>
import TheHeaderClient from "@/components/client/TheHeaderClient.vue";
import TheFooterClient from "@/components/client/TheFooterClient.vue";
import TheBanner from "@/components/client/home/TheBanner.vue";
import TheCategories from "@/components/client/home/TheCategories.vue";
import VistedPlace from "@/components/client/home/VistedPlace.vue";
import FeedBack from "@/components/client/home/FeedBack.vue";
import VactionPlan from "@/components/client/home/VactionPlan.vue";
import FromBlog from "@/components/client/home/FromBlog.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    TheHeaderClient,
    TheFooterClient,
    TheBanner,
    TheCategories,
    VistedPlace,
    FeedBack,
    VactionPlan,
    FromBlog,
  },
};
</script>
      