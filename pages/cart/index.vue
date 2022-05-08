<template>
  <div>
    <b-row>
      <b-col class="title-product"><h4>YOUR CART</h4></b-col>
      <b-col class="title-product">
        <div style="text-align: right; color: #e4e4e4">
          <font-awesome-icon
            :icon="['fas', 'angle-left']"
            style="color: #e4e4e4"
          />
          RETURN TO SHOP
        </div>
      </b-col>
    </b-row>
    <table class="table" style="border: 1px solid #ccc !important">
      <thead>
        <tr>
          <th width="50%">PRODUCT</th>
          <th style="text-align: center">PRICE</th>
          <th style="text-align: center">QUANTITY</th>
          <th style="text-align: center">TOTAL</th>
          <th style="text-align: center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items in items" :key="items.name">
          <td>
            <b-card-img
              :src="`https://placeimg.com/480/480/any?1`"
              style="max-width: 60px; margin: 10px"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            {{ items.name }}
          </td>
          <td style="text-align: center; vertical-align: middle">
            {{ items.price }}
          </td>
          <td style="text-align: center; vertical-align: middle">
            <input type="number" :value="items.qty" />
          </td>
          <td style="text-align: center; vertical-align: middle">
            {{ items.price * items.qty }}
          </td>

          <td style="text-align: center; vertical-align: middle">
            <button class="btn" style="">
              <font-awesome-icon
                :icon="['fas', 'circle-xmark']"
                style="color: #red"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <b-row>
      <b-col class="title-product">
        <input type="text" value="" placeholder="Coupon Code" height="100%" />

        <b-button variant="" class="mb-2" style="border-radius: 0px">
          APPLY COUPON
          <!-- <font-awesome-icon :icon="['fa', 'cart-plus']" style="color: #fff" /> -->
        </b-button>
      </b-col>
      <b-col class="title-product">
        <div style="text-align: right; color: #e4e4e4">
          <b-button variant="dark" class="mb-2" style="border-radius: 0px">
            UPDATE CART
            <!-- <font-awesome-icon :icon="['fa', 'cart-plus']" style="color: #fff" /> -->
          </b-button>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="title-product"> </b-col>
      <b-col class="title-product">
        <div style="text-align: left; color: #000">
          <h5>CART TOTALS</h5>
          <table
            class="table table-bordered"
            style="border: 1px solid #ccc !important"
          >
            <tr>
              <td width="50%">SUB TOTAL</td>
              <td>$87.00</td>
            </tr>
            <tr>
              <td>SHIPPING</td>
              <td>
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="A"
                    >Thailand</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="B"
                    >Fiat Rate : $10.00</b-form-radio
                  >
                </b-form-group>
                <a> Calculate Shipping</a>
                <div style="padding-bottom: 10px; padding-top: 10px">
                  <b-form-select
                    v-model="selected"
                    :options="options"
                  ></b-form-select>
                </div>
                <div style="padding-bottom: 10px">
                  <b-form-select
                    v-model="selected"
                    :options="options"
                  ></b-form-select>
                </div>
                <div style="padding-bottom: 10px">
                  <b-form-input placeholder="Post Code / ZIP"></b-form-input>
                </div>
                <div style="padding-bottom: 10px">
                  <b-button variant="" class="mb-2" style="border-radius: 0px">
                    UPDATE TOTALS
                    <!-- <font-awesome-icon :icon="['fa', 'cart-plus']" style="color: #fff" /> -->
                  </b-button>
                </div>
              </td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td>$87.00</td>
            </tr>
          </table>
          <b-button
            variant="success"
            size="lg"
            class="mb-2"
            style="border-radius: 0px; width: 100%"
          >
            PROCEED TO CHECKOUT
            <!-- <font-awesome-icon :icon="['fa', 'cart-plus']" style="color: #fff" /> -->
          </b-button>
        </div>
      </b-col>
    </b-row>
    <!-- <b-table striped hover :items="items" :fields="fields" :bordered="true">
      <template v-slot:cell(name)="row" style="width: 30%">
        <span> {{ row.item.name }}</span>
      </template>
      <template v-slot:cell(price)="row">
        {{ row.item.price }}
      </template>
      <template v-slot:cell(qty)="row">
        <b-form-input
          v-model="row.item.qty"
          style="width: 10%"
          :type="numbers"
        />
      </template>
      <template v-slot:cell(manage)="row">
        {{ row.item.manage }}
      </template>
    </b-table> -->
  </div>
</template>

<script>
import "slick-carousel/slick/slick.css";
export default {
  name: "Homepage",
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "PRODUCT",
        },
        {
          key: "price",
          label: "PRICE",
        },
        {
          key: "qty",
          label: "QUANTITY",
          thClass: "red",
        },
        {
          key: "manage",
          label: "",
          thClass: "red",
        },
      ],
      items: [
        {
          name: "Joe",
          price: 33,
          qty: 1,
          manage: "",
        },
        {
          name: "Sue",
          price: 77,
          qty: 10,
          manage: "",
        },
      ],
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
};
</script>
<style scoped>
.title-product {
  padding-top: 1em;
  font-family: "Kanit";
  font-size: 1em;
  font-weight: 500;
  /* border-bottom: 1px solid #e4e4e4; */
  padding-bottom: 20px;
}
.tdClass {
  width: 50%;
}
</style>