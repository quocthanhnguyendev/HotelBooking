<template lang="">
  <div class="row total-list">
    <!-- List item -->
    <div class="col-md-8 List">
      <div class="ListCart">
        <!-- Show Quantity items -->
        <div class="card mb-4">
          <div class="card-body itemQTY">
            <h4 class="mt-2 mb-2">Giỏ Hàng Của Bạn ({{ getCart.length }})</h4>
          </div>
        </div>

        <!-- List items -->
        <div class="list-items" v-for="(item, index) in getCart" :key="index">
          <div class="card item mb-4">
            <div class="card-body">
              <div class="row info-item justify-content-between w-100">
                <div class="col-3 img">
                  <!-- item's img -->
                  <img
                    :src="IMAGE_PATH + item.Hotel.thumbnail"
                    alt=""
                    class="Images_Hotels"
                  />
                </div>
                <div class="col-8 p-0 text-start">
                  <!-- item's hotel name -->
                  <h5>{{ item.Hotel.name }}</h5>
                  <div class="address-comm">
                    <!-- address -->
                    <p>
                      <i class="fa-solid fa-location-dot fa-sm"></i>
                      {{ item.Hotel.address }}
                    </p>

                    <Rating
                      :star="(item.Hotel.rating / 10) * 5"
                      :starSize="starSize"
                      :hasResults="true"
                      :hasDescription="true"
                      :ratingDescription="desc"
                    />

                    <!-- comments -->
                    <p>
                      <i class="fa-solid fa-people-group mt-4"></i>
                      {{ item.Info.adult }} Người lớn{{
                        item.Info.children != 0
                          ? ", " + item.Info.children + " Trẻ em"
                          : ""
                      }}
                    </p>
                  </div>
                </div>
                <div
                  @click="DeleteRoomHandleClick(index)"
                  class="col-1 del-icon p-0 text-end"
                >
                  <i class="fa-solid fa-trash-can fa-xl"></i>
                </div>
              </div>
            </div>
            <div :class="'bg-' + index + ' card-footer'">
              <div class="row room-price">
                <div class="col-md room-checkin-checkout">
                  <!-- room name -->
                  <div class="form-check">
                    <label
                      class="form-check-label room-name"
                      :for="'flexCheckDefault-' + index"
                    >
                      {{ item.Info.room_number }} x {{ item.Room_Type.name }}
                    </label>
                  </div>
                  <p class="daycheck">
                    {{ DateFormat(item.Info.checkin) }} -
                    {{ DateFormat(item.Info.checkout) }}
                  </p>
                </div>
                <!-- item price -->
                <div class="col-md text-end">
                  <p class="m-0 price">{{ formatCurrency(item.total) }}</p>
                  <p class="m-0 tax">Bao gồm thuế và phí</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="list-items" v-if="getCart.length < 1">
          <div class="card item mb-4">
            <div class="card-body">
              <div class="Image-Empty">
                <img src="/images/empty-cart.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Total-Payment Button -->
    <div class="col-md Total">
      <div class="TotalCart card">
        <div class="row card-body">
          <div class="col-6 text-sm-start">
            <div class="total-price">Tổng tiền tạm thời</div>
            <div class="item-qty">
              {{ getCart.length }}, including taxes & fees
            </div>
          </div>
          <div class="col-6 text-end">{{ formatCurrency(getTotal) }}</div>
          <router-link to="/payment" v-show="getCart.length >= 1"
            ><button class="btn-action btn btn-danger w-100 mt-3">
              Next
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
  <vue-basic-alert :duration="300" :closeIn="3000" ref="alert" />
</template>
<script>
import CartData from "@/Data/CartData";
import { mapGetters, mapMutations } from "vuex";
import Rating from "./Rating.vue";
import VueBasicAlert from "vue-basic-alert";

export default {
  name: "ListCartComponent",
  components: { Rating, VueBasicAlert },
  data() {
    return {
      IMAGE_PATH: process.env.VUE_APP_IMAGE_PATH,
      CartData: CartData,
      desc: [
        {
          text: "Không hài lòng",
          class: "star-poor",
        },
        {
          text: "Hài lòng",
          class: "star-belowAverage",
        },
        {
          text: "Rất tốt",
          class: "star-average",
        },
        {
          text: "Tuyệt vời",
          class: "star-good",
        },
        {
          text: "Trên cả tuyệt vời",
          class: "star-excellent",
        },
      ],
      starSize: "lg", //xs/6x
    };
  },

  methods: {
    ...mapMutations("Cart", ["DELETE_ONE_ROOM"]),

    AlertShow(type, hearder, message) {
      this.$refs.alert.showAlert(
        type, // There are 4 types of alert: success, info, warning, error

        message, // Message of the alert
        hearder // Header of the alert
      );
    },

    DateFormat(DateInput) {
      var date = new Date(DateInput);
      return `${date.getDate()} tháng ${
        date.getMonth() + 1
      } ${date.getFullYear()}`;
    },

    DeleteRoomHandleClick(index) {
      this.DELETE_ONE_ROOM(index);
      this.AlertShow("success", "Thành Công", "Đã xoá phòng thành công.");
    },

    CalDate(date) {
      let day = date.slice(0, 2);
      let month = date.slice(3, 5);
      let year = date.slice(6, 10);
      let daytime = day + " tháng " + month + " năm " + year;
      return daytime;
    },
    checkAcpt: (id) => {
      let item = CartData;
      let Chekclass = ".check-" + id;
      let Bgclass = ".bg-" + id;
      let bg = document.querySelector(Bgclass);
      let check = document.querySelector(Chekclass);
      if (item[id].action != true) {
        bg.setAttribute(
          "style",
          "background-color: rgb(235, 240, 252) !important;"
        );
        CartData[id].action == true;
      } else {
        bg.setAttribute("style", "background-color: White;");
        CartData[id].action == false;
      }
      check.click();
    },
    REcheckAcpt: (id) => {
      let item = CartData;
      let Chekclass = ".check-" + id;
      let Bgclass = ".bg-" + id;
      let bg = document.querySelector(Bgclass);
      let check = document.querySelector(Chekclass);
      if (item[id].action != true) {
        bg.setAttribute(
          "style",
          "background-color: rgb(235, 240, 252) !important;"
        );
        CartData[id].action == true;
      } else {
        bg.setAttribute("style", "background-color: White;");
        CartData[id].action == false;
      }
      check.click();
    },
    Qtychekitem() {
      let qty = 0;
      let item = CartData;
      for (let i = 0; i < item.length; i++) {
        if (item[i].action == true) {
          qty = qty + 1;
        }
      }
      return qty;
    },
    SumTotal() {
      let total = 0;
      let item = CartData;
      for (let i = 0; i < item.length; i++) {
        if (item[i].action == true) {
          total = total + item[i].price;
        }
      }
      return total;
    },
    formatCurrency(value) {
      let done = Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
      return done;
    },
  },

  computed: {
    ...mapGetters("Cart", ["getCart", "getTotal"]),
  },
};
</script>
<style scoped>
.ListCart {
  margin-top: 24px;
  margin-right: 16px;
  padding: 0px;
  width: 100%;
}

.info-item {
  padding: 0px !important;
}

.img img {
  border-radius: 5px;
}

.rate-star {
  display: inline-block;
}

.progress-rate {
  background-color: rgb(255, 255, 255);
  width: 20%;
  display: block;
  margin-left: auto;
  position: relative;
  top: -25px;
}

.address-comm p {
  color: var(--font-Graycolor);
  font-size: 16.5px;
}

.room-price {
  padding: 5px 0px !important;
  font-size: 18px;
}

.price {
  font-weight: 500;
}

.daycheck,
.tax {
  font-size: 15px;
  margin-bottom: 0px;
  color: var(--font-Graycolor);
}

.room-name {
  color: var(--main-Color);
}

.room-check {
  border: 1px solid rgb(141, 151, 170) !important;
}

.card-footer {
  background-color: white !important;
  cursor: pointer;
}

.total-list {
  padding: 0 70px;
}

.TotalCart {
  margin-top: 24px;
  padding: 16px 12px;
  width: 100%;
}

.del-icon {
  cursor: pointer;
}

.Image-Empty {
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Image-Empty > img {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.Images_Hotels {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.itemQTY > h4 {
  font-family: unset;
  font-weight: bolder;
}

@media screen and (max-width: 767px) {
  .TotalCart {
    margin: 0;
  }

  .total-list {
    padding: 0px;
  }

  .List {
    padding: 0px;
  }

  .Total {
    height: 200px;
    padding: 0px;
  }

  .TotalCart {
    position: fixed;
    bottom: 0px;
  }
}
</style>
