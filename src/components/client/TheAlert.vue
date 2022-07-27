<template>
  <div v-if="isOpenAlert" class="modal__alert">
    <div class="alert__content">
      <!-- alert icon -->
      <div>
        <div
          v-if="alert.title === 'Success'"
          class="icon__alert icon__alert__success"
        >
          <div>
            <i class="fa fa-check"></i>
          </div>
        </div>
        <div
          v-else-if="alert.title === 'Error'"
          class="icon__alert icon__alert__error"
        >
          <div>
            <i class="fa fa-times"></i>
          </div>
        </div>
        <div
          v-else-if="alert.title === 'Warning'"
          class="icon__alert icon__alert__warning"
        >
          <div>
            <i class="fa fa-exclamation"></i>
          </div>
        </div>
        <div
          v-else-if="alert.title === 'Info'"
          class="icon__alert icon__alert__info"
        >
          <div>
            <i class="fa fa-info"></i>
          </div>
        </div>
      </div>
      <h2 class="title__alert">{{ alert.title }}</h2>
      <p class="text__alert">{{ alert.text }}</p>
      <button class="button__alert" @click="handleCloseAlertModal">
        {{ alert.button }}
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  props: {
    isOpenAlert: {
      type: Boolean,
    },
    handleCloseAlert: {
      type: Function,
    },
  },
  setup(props) {
    const alert = reactive({
      icon: "Icon",
      title: "Success",
      text: "Text",
      button: "OK",
    });

    const handleCloseAlertModal = () => {
      props.handleCloseAlert();
    };

    return {
      alert,
      handleCloseAlertModal,
    };
  },
};
</script>

<style lang='scss'>
.modal__alert {
  top: 0;
  left: 0;
  width: 99vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  position: fixed;
  display: flex;
  .alert__content {
    background-color: azure;
    width: 50%;
    margin: auto;
    justify-content: center;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    .icon__alert {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: auto;
      font-size: 50px;
      line-height: 90px;
      position: relative;
    }
    .icon__alert__success {
      border: 5px solid rgb(83, 231, 83);
      color: rgb(83, 231, 83);
    }
    .icon__alert__error {
      border: 5px solid rgb(226, 52, 52);
      color: rgb(226, 52, 52);
    }
    .icon__alert__warning {
      border: 5px solid rgb(202, 146, 42);
      color: rgb(202, 146, 42);
    }
    .icon__alert__info {
      border: 5px solid rgb(187, 135, 236);
      color: rgb(187, 135, 236);
    }
    .title__alert {
      font-weight: 700;
    }
    .button__alert {
      padding: 10px 20px;
      border-radius: 15px;
      border: 1px solid;
      font-weight: 700;
      background-color: rgb(102, 102, 211);
      color: white;
      &:hover {
        background-color: rgb(61, 61, 238);
      }
    }
  }
}
</style>