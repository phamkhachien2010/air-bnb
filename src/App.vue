<template>
  <router-view />
  <the-alert :isOpenAlert="isOpenAlert" :handleCloseAlert="handleCloseAlert" />
</template>

<script>
import { ref } from "vue";
import TheAlert from "./components/client/TheAlert.vue";
export default {
  components: {
    TheAlert,
  },
  setup() {
    const isOpenAlert = ref(false);

    const handleOpenAlert = () => {
      isOpenAlert.value = true;
    };

    const handleCloseAlert = () => {
      isOpenAlert.value = false;
    };

    return {
      isOpenAlert,
      handleCloseAlert,
      handleOpenAlert,
    };
  },
};
</script>

<style lang="scss">
</style>
