<template>
  <the-header-client />
  <!-- Gradient-->
  <div class="single-listing-page-titlebar"></div>

  <!-- Content
================================================== -->
  <div class="container">
    <div class="row sticky-wrapper">
      <div class="col-lg-8 col-md-8 padding-right-30">
        <!-- Titlebar -->
        <div id="titlebar" class="listing-titlebar">
          <div class="listing-titlebar-title">
            <h2>
              {{ roomDetail.name }}
            </h2>
            <span>
              <span class="listing-address">
                <i class="fa fa-map-marker"></i>
                {{ roomDetail.locationId.province }} -
                {{ roomDetail.locationId.country }}
              </span>
            </span>
            <div class="star-rating" data-rating="5">
              <div class="rating-counter">
                <span>(31 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Listing Nav -->
        <div id="listing-nav" class="listing-nav-container">
          <ul class="listing-nav">
            <li><a href="#listing-overview" class="active">Overview</a></li>
            <li><a href="#listing-gallery">Gallery</a></li>
            <li><a href="#listing-location">Location</a></li>
            <li><a href="#listing-reviews">Reviews</a></li>
            <li><a href="#add-review">Add Review</a></li>
          </ul>
        </div>

        <!-- Overview -->
        <div id="listing-overview" class="listing-section">
          <!-- Apartment Description -->
          <ul class="apartment-details">
            <li v-if="roomDetail.guests">{{ roomDetail.guests }} guests</li>
            <li v-if="roomDetail.bedRoom">{{ roomDetail.bedRoom }} bedroom</li>
            <li v-if="roomDetail.bath">{{ roomDetail.bath }} bathroom</li>
          </ul>

          <!-- Description -->
          <p>{{ roomDetail.description }}</p>

          <!-- Listing Contacts -->
          <div class="listing-links-container">
            <ul class="listing-links contact-links">
              <li>
                <a href="tel:12-345-678" class="listing-links"
                  ><i class="fa fa-phone"></i> +12 345 6578</a
                >
              </li>
              <li>
                <a href="mailto:mail@example.com" class="listing-links"
                  ><i class="fa fa-envelope-o"></i> mail@example.com</a
                >
              </li>
              <li>
                <a href="#" target="_blank" class="listing-links"
                  ><i class="fa fa-link"></i> www.example.com</a
                >
              </li>
            </ul>
            <div class="clearfix"></div>

            <ul class="listing-links">
              <li>
                <a href="#" target="_blank" class="listing-links-fb"
                  ><i class="fa fa-facebook-square"></i> Facebook</a
                >
              </li>
              <li>
                <a href="#" target="_blank" class="listing-links-yt"
                  ><i class="fa fa-youtube-play"></i> YouTube</a
                >
              </li>
              <li>
                <a href="#" target="_blank" class="listing-links-ig"
                  ><i class="fa fa-instagram"></i> Instagram</a
                >
              </li>
              <li>
                <a href="#" target="_blank" class="listing-links-tt"
                  ><i class="fa fa-twitter"></i> Twitter</a
                >
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>

          <!-- Amenities -->
          <h3 class="listing-desc-headline">Amenities</h3>
          <ul class="listing-features checkboxes">
            <li v-if="roomDetail.elevator">Elevator in building</li>
            <li v-if="roomDetail.cableTV">Television in bedroom</li>
            <li v-if="roomDetail.dryer">Dryer</li>
            <li v-if="roomDetail.hotTub">Tub in bathroom</li>
            <li v-if="roomDetail.kitchen">Kitchen in building</li>
            <li v-if="roomDetail.pool">With Pool</li>
            <li v-if="roomDetail.indoorFireplace">Fireplace in building</li>
          </ul>
        </div>

        <!-- Slider -->
        <div id="listing-gallery" class="listing-section">
          <h3 class="listing-desc-headline margin-top-70">Gallery</h3>
          <div
            class="listing-slider-small mfp-gallery-container margin-bottom-0"
          >
            <img :src="roomDetail.image" alt="" />
          </div>
        </div>

        <!-- Reviews -->
        <div id="listing-reviews" class="listing-section">
          <h3 class="listing-desc-headline margin-top-75 margin-bottom-20">
            Reviews <span>({{ listReview.length }})</span>
          </h3>

          <!-- Rating Overview -->
          <div class="rating-overview">
            <div class="rating-overview-box">
              <span class="rating-overview-box-total">4.7</span>
              <span class="rating-overview-box-percent">out of 5.0</span>
              <div class="star-rating" data-rating="5"></div>
            </div>

            <div class="rating-bars">
              <div class="rating-bars-item">
                <span class="rating-bars-name"
                  >Service
                  <i
                    class="tip"
                    data-tip-content="Quality of customer service and attitude to work with you"
                  ></i
                ></span>
                <span class="rating-bars-inner">
                  <span class="rating-bars-rating" data-rating="4.7">
                    <span class="rating-bars-rating-inner"></span>
                  </span>
                  <strong>4.7</strong>
                </span>
              </div>
              <div class="rating-bars-item">
                <span class="rating-bars-name"
                  >Value for Money
                  <i
                    class="tip"
                    data-tip-content="Overall experience received for the amount spent"
                  ></i
                ></span>
                <span class="rating-bars-inner">
                  <span class="rating-bars-rating" data-rating="3.8">
                    <span class="rating-bars-rating-inner"></span>
                  </span>
                  <strong>3.8</strong>
                </span>
              </div>
              <div class="rating-bars-item">
                <span class="rating-bars-name"
                  >Location
                  <i
                    class="tip"
                    data-tip-content="Visibility, commute or nearby parking spots"
                  ></i
                ></span>
                <span class="rating-bars-inner">
                  <span class="rating-bars-rating" data-rating="2.7">
                    <span class="rating-bars-rating-inner"></span>
                  </span>
                  <strong>2.7</strong>
                </span>
              </div>
              <div class="rating-bars-item">
                <span class="rating-bars-name"
                  >Cleanliness
                  <i
                    class="tip"
                    data-tip-content="The physical condition of the business"
                  ></i
                ></span>
                <span class="rating-bars-inner">
                  <span class="rating-bars-rating" data-rating="5.0">
                    <span class="rating-bars-rating-inner"></span>
                  </span>
                  <strong>5.0</strong>
                </span>
              </div>
            </div>
          </div>
          <!-- Rating Overview / End -->

          <div class="clearfix"></div>

          <!-- Reviews -->
          <section class="comments listing-reviews">
            <ul>
              <li v-for="(review, index) in listReview" :key="index">
                <the-review-item :review="review" />
              </li>
            </ul>
          </section>

          <!-- Pagination -->
          <div class="clearfix"></div>
          <div class="row">
            <div class="col-md-12">
              <!-- Pagination -->
              <div class="pagination-container margin-top-30">
                <nav class="pagination">
                  <ul>
                    <li><a href="#" class="current-page">1</a></li>
                    <li><a href="#">2</a></li>
                    <li>
                      <a href="#"><i class="sl sl-icon-arrow-right"></i></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
          <!-- Pagination / End -->
        </div>

        <!-- Add Review Box -->
        <div id="add-review" class="add-review-box">
          <!-- Add Review -->
          <h3 class="listing-desc-headline margin-bottom-10">Add Review</h3>
          <p class="comment-notes">Your email address will not be published.</p>

          <!-- Subratings Container -->
          <div class="sub-ratings-container">
            <!-- Subrating #1 -->
            <div class="add-sub-rating">
              <div class="sub-rating-title">
                Service
                <i
                  class="tip"
                  data-tip-content="Quality of customer service and attitude to work with you"
                ></i>
              </div>
              <div class="sub-rating-stars">
                <!-- Leave Rating -->
                <div class="clearfix"></div>
                <form class="leave-rating">
                  <input type="radio" name="rating" id="rating-1" value="1" />
                  <label for="rating-1" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-2" value="2" />
                  <label for="rating-2" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-3" value="3" />
                  <label for="rating-3" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-4" value="4" />
                  <label for="rating-4" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-5" value="5" />
                  <label for="rating-5" class="fa fa-star"></label>
                </form>
              </div>
            </div>

            <!-- Subrating #2 -->
            <div class="add-sub-rating">
              <div class="sub-rating-title">
                Value for Money
                <i
                  class="tip"
                  data-tip-content="Overall experience received for the amount spent"
                ></i>
              </div>
              <div class="sub-rating-stars">
                <!-- Leave Rating -->
                <div class="clearfix"></div>
                <form class="leave-rating">
                  <input type="radio" name="rating" id="rating-11" value="1" />
                  <label for="rating-11" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-12" value="2" />
                  <label for="rating-12" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-13" value="3" />
                  <label for="rating-13" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-14" value="4" />
                  <label for="rating-14" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-15" value="5" />
                  <label for="rating-15" class="fa fa-star"></label>
                </form>
              </div>
            </div>

            <!-- Subrating #3 -->
            <div class="add-sub-rating">
              <div class="sub-rating-title">
                Location
                <i
                  class="tip"
                  data-tip-content="Visibility, commute or nearby parking spots"
                ></i>
              </div>
              <div class="sub-rating-stars">
                <!-- Leave Rating -->
                <div class="clearfix"></div>
                <form class="leave-rating">
                  <input type="radio" name="rating" id="rating-21" value="1" />
                  <label for="rating-21" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-22" value="2" />
                  <label for="rating-22" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-23" value="3" />
                  <label for="rating-23" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-24" value="4" />
                  <label for="rating-24" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-25" value="5" />
                  <label for="rating-25" class="fa fa-star"></label>
                </form>
              </div>
            </div>

            <!-- Subrating #4 -->
            <div class="add-sub-rating">
              <div class="sub-rating-title">
                Cleanliness
                <i
                  class="tip"
                  data-tip-content="The physical condition of the business"
                ></i>
              </div>
              <div class="sub-rating-stars">
                <!-- Leave Rating -->
                <div class="clearfix"></div>
                <form class="leave-rating">
                  <input type="radio" name="rating" id="rating-31" value="1" />
                  <label for="rating-31" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-32" value="2" />
                  <label for="rating-32" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-33" value="3" />
                  <label for="rating-33" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-34" value="4" />
                  <label for="rating-34" class="fa fa-star"></label>
                  <input type="radio" name="rating" id="rating-35" value="5" />
                  <label for="rating-35" class="fa fa-star"></label>
                </form>
              </div>
            </div>

            <!-- Uplaod Photos -->
            <div class="uploadButton margin-top-15">
              <input
                class="uploadButton-input"
                type="file"
                name="attachments[]"
                accept="image/*, application/pdf"
                id="upload"
                multiple
              />
              <label class="uploadButton-button ripple-effect" for="upload"
                >Add Photos</label
              >
              <span class="uploadButton-file-name"></span>
            </div>
            <!-- Uplaod Photos / End -->
          </div>
          <!-- Subratings Container / End -->

          <!-- Review Comment -->
          <form id="add-comment" class="add-comment">
            <fieldset>
              <div class="row">
                <div class="col-md-6">
                  <label>Name:</label>
                  <input type="text" value="" />
                </div>

                <div class="col-md-6">
                  <label>Email:</label>
                  <input type="text" value="" />
                </div>
              </div>

              <div>
                <label>Review:</label>
                <textarea cols="40" rows="3"></textarea>
              </div>
            </fieldset>

            <button class="button">Submit Review</button>
            <div class="clearfix"></div>
          </form>
        </div>
        <!-- Add Review Box / End -->
      </div>

      <!-- Sidebar
		================================================== -->
      <div class="col-lg-4 col-md-4 margin-top-75 sticky">
        <!-- Verified Badge -->
        <div
          class="verified-badge with-tip"
          data-tip-content="Listing has been verified and belongs the business owner or manager."
        >
          <i class="sl sl-icon-check"></i> Verified Listing
        </div>

        <!-- Book Now -->
        <div
          id="booking-widget-anchor"
          class="boxed-widget booking-widget margin-top-35"
        >
          <h3><i class="fa fa-calendar-check-o"></i> Booking</h3>
          <div class="row with-forms margin-top-0">
            <!-- Date Range Picker - docs: http://www.daterangepicker.com/ -->
            <div class="col-lg-12">
              <h4>From</h4>
              <input type="date" v-model="bookinInfo.from" />
            </div>

            <div class="col-lg-12">
              <h4>To</h4>
              <input type="date" v-model="bookinInfo.to" />
            </div>

            <!-- Panel Dropdown -->
            <div class="col-lg-12">
              <div class="panel-dropdown guest__contain">
                <div class="guest" @click="hanldeDropDownGuest">
                  Guests
                  <span class="qtyTotal" name="qtyTotal">{{
                    bookinInfo.adults + bookinInfo.children
                  }}</span>
                </div>
                <div class="guest__dropdown" v-if="isDropDownGuest">
                  <div class="guest__dropdown__item">
                    <span>Adults</span>
                    <div>
                      <span
                        class="guest__action"
                        @click="handleChangeAdult(false)"
                        >-</span
                      >
                      <span class="guest__result">{{ bookinInfo.adults }}</span>
                      <span
                        class="guest__action"
                        @click="handleChangeAdult(true)"
                        >+</span
                      >
                    </div>
                  </div>
                  <div class="guest__dropdown__item">
                    <span>Children</span>
                    <div>
                      <span
                        class="guest__action"
                        @click="handleChangeChildren(false)"
                        >-</span
                      >
                      <span class="guest__result">{{
                        bookinInfo.children
                      }}</span>
                      <span
                        class="guest__action"
                        @click="handleChangeChildren(true)"
                        >+</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Panel Dropdown / End -->
          </div>

          <!-- Book Now -->

          <div>
            <span
              v-if="
                (bookinInfo.from && bookinInfo.to && bookinInfo.adults) ||
                bookinInfo.children
              "
              class="request__book"
              @click="handleToBooking"
            >
              Request To Book
            </span>
            <button v-else disabled class="request__book">
              Request To Book
            </button>
          </div>

          <!-- Estimated Cost -->
          <!-- 				<div class="booking-estimated-cost">
					<strong>Total Cost</strong>
					<span>$49</span>
				</div> -->
        </div>
        <!-- Book Now / End -->

        <!-- Contact -->
        <div class="boxed-widget margin-top-35">
          <div class="hosted-by-title">
            <h4>
              <span>Hosted by</span>
              <a href="#">Tom Perrin</a>
            </h4>
          </div>
          <ul class="listing-details-sidebar">
            <li><i class="sl sl-icon-phone"></i> (123) 123-456</li>
            <!-- <li><i class="sl sl-icon-globe"></i> <a href="#">http://example.com</a></li> -->
            <li>
              <i class="fa fa-envelope-o"></i> <a href="#">tom@example.com</a>
            </li>
          </ul>

          <ul class="listing-details-sidebar social-profiles">
            <li>
              <a href="#" class="facebook-profile"
                ><i class="fa fa-facebook-square"></i> Facebook</a
              >
            </li>
            <li>
              <a href="#" class="twitter-profile"
                ><i class="fa fa-twitter"></i> Twitter</a
              >
            </li>
            <!-- <li><a href="#" class="gplus-profile"><i class="fa fa-google-plus"></i> Google Plus</a></li> -->
          </ul>

          <!-- Reply to review popup -->
          <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
            <div class="small-dialog-header">
              <h3>Send Message</h3>
            </div>
            <div class="message-reply margin-top-0">
              <textarea
                cols="40"
                rows="3"
                placeholder="Your message to Tom"
              ></textarea>
              <button class="button">Send Message</button>
            </div>
          </div>

          <a
            href="#small-dialog"
            class="send-message-to-owner button popup-with-zoom-anim"
            ><i class="sl sl-icon-envelope-open"></i> Send Message</a
          >
        </div>
        <!-- Contact / End-->

        <!-- Share / Like -->
        <div class="listing-share margin-top-40 margin-bottom-40 no-border">
          <button class="like-button">
            <span class="like-icon"></span> Bookmark this listing
          </button>
          <span>159 people bookmarked this place</span>

          <!-- Share Buttons -->
          <ul class="share-buttons margin-top-40 margin-bottom-0">
            <li>
              <a class="fb-share" href="#"
                ><i class="fa fa-facebook"></i> Share</a
              >
            </li>
            <li>
              <a class="twitter-share" href="#"
                ><i class="fa fa-twitter"></i> Tweet</a
              >
            </li>
            <li>
              <a class="gplus-share" href="#"
                ><i class="fa fa-google-plus"></i> Share</a
              >
            </li>
            <!-- <li><a class="pinterest-share" href="#"><i class="fa fa-pinterest-p"></i> Pin</a></li> -->
          </ul>
          <div class="clearfix"></div>
        </div>
      </div>
      <!-- Sidebar / End -->
    </div>
  </div>
  <the-footer-client />
</template>

<script>
import TheHeaderClient from "@/components/client/TheHeaderClient.vue";
import TheFooterClient from "@/components/client/TheFooterClient.vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { computed, reactive, ref, watch } from "vue";
import TheReviewItem from "@/components/client/roomDetail/TheReviewItem.vue";
import { USER_LOGIN } from "@/configs";
export default {
  components: { TheHeaderClient, TheFooterClient, TheReviewItem },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const bookinInfo = reactive({
      children: 0,
      adults: 0,
      from: "",
      to: "",
    });
    const isDropDownGuest = ref(false);

    store.dispatch("room/getRoomDetailByIdAction", route.params.roomId);
    const roomDetail = computed(() => store.state.room.roomById);
    store.dispatch("review/getReviewByRoomIdAction", route.params.roomId);
    const listReview = computed(() => store.state.review.listReview);
    const handleToBooking = () => {
      if (localStorage.getItem(USER_LOGIN)) {
        router.push(`/booking-room/${route.params.roomId}`);
      } else {
        router.push(`/login`);
      }
    };

    const handleChangeAdult = (isCrease) => {
      if (isCrease) {
        bookinInfo.adults += 1;
      } else {
        if (bookinInfo.adults === 0) {
          bookinInfo.adults = 0;
        } else {
          bookinInfo.adults -= 1;
        }
      }
    };

    const handleChangeChildren = (isCrease) => {
      if (isCrease) {
        bookinInfo.children += 1;
      } else {
        if (bookinInfo.children === 0) {
          bookinInfo.children = 0;
        } else {
          bookinInfo.children -= 1;
        }
      }
    };

    watch(bookinInfo, (newValue) => {
      store.dispatch("room/getBookingInfoAction", newValue);
    });

    const hanldeDropDownGuest = () => {
      if (isDropDownGuest.value) {
        isDropDownGuest.value = false;
      } else {
        isDropDownGuest.value = true;
      }
    };

    return {
      roomDetail,
      listReview,
      handleToBooking,
      bookinInfo,
      handleChangeAdult,
      handleChangeChildren,
      isDropDownGuest,
      hanldeDropDownGuest,
    };
  },
};
</script>

<style lang='scss'>
.request__book {
  width: 100%;
  text-align: center;
  padding: 9px;
  background-color: #f91942;
  display: block;
  margin-bottom: -4px;
  color: white;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
}
.guest__contain {
  margin-bottom: 10px;
  -webkit-box-shadow: 1px 0px 14px 1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 1px 0px 14px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 1px 0px 14px 1px rgba(0, 0, 0, 0.24);
  font-weight: bold;
  padding: 5px 15px;
  .guest {
    border: 1px solid transparent;
    cursor: pointer;
  }
  .guest__dropdown {
    border-top: 1px solid rgba(85, 85, 85, 0.466);
    padding: 10px 0;
    .guest__dropdown__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        padding: 10px 0;
        width: 50%;
        display: flex;
        justify-content: space-around;
        .guest__action {
          display: block;
          width: 30px;
          height: 30px;
          line-height: 30px;
          background-color: rgba(141, 138, 138, 0.459);
          text-align: center;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>