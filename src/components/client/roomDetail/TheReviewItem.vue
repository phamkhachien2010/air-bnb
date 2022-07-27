<template>
  <div class="avatar">
    <img v-if="review.userId?.avatar" :src="review.userId?.avatar" alt="" />
    <img
      v-else
      src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
      alt=""
    />
  </div>
  <div class="comment-content">
    <div class="arrow-comment"></div>
    <div class="comment-by">
      {{ review.userId?.name }}
      <i
        class="tip"
        data-tip-content="Person who left this review actually was a customer"
      ></i>
      <span class="date">{{ review.dateCreate }}</span>
      <div class="star-rating" data-rating="5"></div>
    </div>
    <p>{{ review.content }}</p>
    <a href="#" class="rate-review"
      ><i class="sl sl-icon-like"></i> Helpful Review <span>12</span></a
    >
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
    },
  },
  setup() {},
};
</script>

<style>
</style>