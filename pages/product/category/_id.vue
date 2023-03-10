<template>
  <div>
    <!-- <div class="" style="margin: 0 -2em 0 -1em">
      <b-collapse
        id="example-collapse"
        style="width: 100%; margin: 0 0 0 0; max-height: 250px; overflow: auto"
      >
        <div v-for="(category, idx) in categorys" :key="'A' + idx">
          <ul>
            <li>
              <nuxt-link
                :to="{
                  path: `/product/category/${category.product_category_code}`,
                }"
              >
                {{ category.product_category_name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </b-collapse>
    </div> -->

    <b-row class="mt-3">
      <b-col md="6">
        <div
          v-for="(category_name, idx) in category_names.slice(0, 1)"
          :key="'B' + idx"
        >
          <h4>ค้นหา : {{ category_name.product_category_name }}</h4>
        </div>
      </b-col>
      <b-col md="6" class="text-left text-md-right">
        HOME / SHOP /
        <span style="color: #888888"> SHOP SIDEBAR LEFT </span>
      </b-col>
    </b-row>

    <hr class="mt-2" />

    <b-row class="pr-md-3">
      <b-col md="4" lg="3" class="mt-4">
        <b-button
          class="d-flex align-items-center justify-content-between mb-0"
          block
          v-b-toggle.collapse
          variant="default"
        >
          CATEGORIES
          <font-awesome-icon :icon="['fas', 'angle-down']" />
        </b-button>
        <b-collapse id="collapse" class="filter-list-group-panel">
          <b-list-group class="rounded-0">
            <b-list-group-item
              v-for="(category, idx) in categorys"
              :key="'B' + idx"
              :href="`/product/category/${category.product_category_code}`"
              class="px-3 py-2"
            >
              {{ category.product_category_name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
        <p class="mt-3">FLITER BY</p>
        <b-button
          variant="default"
          class="d-flex align-items-center justify-content-between mb-0"
          style="box-shadow: unset"
          block
          squared
          v-b-toggle.collapse1
        >
          BRANDS
          <font-awesome-icon :icon="['fas', 'angle-down']" />
        </b-button>
        <b-collapse id="collapse1" class="filter-panel">
          <b-list-group class="rounded-0">
            <b-list-group-item v-for="(brand, idx) in brands" :key="'C' + idx">
              <input
                type="checkbox"
                checked
                :name="`${brand.product_brand_code}`"
                :value="`${brand.product_brand_code}`"
                v-model="checkedNames"
                @change="check_brand($event)"
              />
              {{ brand.product_brand_name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
        <b-button
          variant="default"
          class="d-flex align-items-center justify-content-between mb-0"
          style="box-shadow: unset"
          block
          squared
          v-b-toggle.collapse2
        >
          PRICE
          <font-awesome-icon :icon="['fas', 'angle-down']" />
        </b-button>
        <b-collapse id="collapse2" class="filter-panel px-3 text-center">
          <b-form-input
            type="number"
            class="mt-3"
            v-model="min"
            placeholder="ใส่ราคาต่ำสุด"
          />
          <div class="mt-3">ถึง</div>
          <b-form-input
            type="number"
            class="mt-3"
            v-model="max"
            placeholder="ใส่ราคาสูงสุด"
          />
          <p id="demo"></p>
          <b-button
            type="submit"
            class="mt-3"
            variant="success"
            @click="check_price()"
          >
            ยืนยัน
          </b-button>

          <b-modal id="my-modal" hide-footer>
            <template #modal-title>
              <h5 class="text-danger">แจ้งเตือน !!</h5>
            </template>
            <div class="d-block text-center">
              <p>กรุณาใส่จำนวนเงิน น้อยสุด และ มากสุด !</p>
            </div>
            <div class="d-flex justify-content-end">
              <b-button class="" @click="$bvModal.hide('my-modal')">
                Close
              </b-button>
            </div>
          </b-modal>
        </b-collapse>
        <b-button
          type="submit"
          variant="danger"
          class="mt-2"
          block
          squared
          @click="reset_filter()"
        >
          ลบตัวกรอง
        </b-button>
      </b-col>
      <b-col class="mt-4 pl-0 pr-0">
        <b-row
          no-gutters
          class="product-list justify-content-around justify-content-lg-start"
          style="min-height: 240px"
        >
          <b-col
            cols="6"
            sm="4"
            md="3"
            class="pt-sm-2 py-md-0"
            style="min-width: 210px"
            v-for="(product, idx) in category_products"
            :key="'E' + idx"
          >
            <card-product :item="product" :rating="true" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row>
      <div
        style="
          margin-top: 1em;
          justify-content: center;
          list-style-type: none;
          width: 100%;
          display: flex;
          padding: 1em 1em;
          border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
          border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
          border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
        "
        v-for="(count, idx) in counts"
        :key="'F' + idx"
      >
        <div
          v-if="count.product_count == 0"
          style="margin-top: 1em; margin-bottom: 10em; text-align: center"
        >
          <p>ไม่พบสินค้า</p>
          <button type="submit" class="btn btn-success" @click="reset_data()">
            กลับไปหน้ารายการสินค้า
          </button>
        </div>
        <div
          v-if="
            count.product_count < 1 &&
            count.product_count > 0 &&
            count.product_count != 0 &&
            Math.round(count.product_count) != 1
          "
        >
          <ul
            v-if="pages == 1"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0 0 0.5em">
              <button class="btn btn-light" style="float: right" disbled>
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
          </ul>
        </div>
        <div v-if="Math.round(count.product_count) == 1">
          <ul
            v-if="pages == 1"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0 0 0.5em">
              <button class="btn btn-light" style="float: right" disbled>
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
          </ul>
        </div>
        <div v-if="Math.round(count.product_count) == 2">
          <ul
            v-if="pages == 1"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 2"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0 0 0.5em">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
          </ul>
        </div>
        <div v-if="Math.round(count.product_count) == 3">
          <ul
            v-if="pages == 1"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 2"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 3"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0 0 0.5em">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
          </ul>
        </div>
        <div v-if="Math.round(count.product_count) == 4">
          <ul
            v-if="pages == 1"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 3}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 2"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 3"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>

            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 4"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 3}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0 0 0.5em">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
          </ul>
        </div>
        <div v-if="Math.round(count.product_count) == 5">
          <ul
            v-if="pages == 1"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 3}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 4}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 4 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 2"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 3}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 3"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 4"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 3}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 5"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 4}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 4 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 3}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0 0 0.5em">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
          </ul>
        </div>
        <div v-if="Math.round(count.product_count) > 5">
          <ul
            v-if="pages == 1"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 3}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 4}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 4 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 2"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 3}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == 3"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == Math.round(count.product_count) - 2 && pages != 3"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == Math.round(count.product_count) - 1"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 3}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
          <ul
            v-if="pages == Math.round(count.product_count)"
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 4}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 4 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 3}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0 0 0.5em">
              <button
                class="btn btn-light"
                style="float: left; color: #333"
                disbled
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </button>
            </li>
          </ul>
          <ul
            v-if="
              pages > 3 &&
              pages != Math.round(count.product_count) - 2 &&
              pages != Math.round(count.product_count) - 1 &&
              pages != Math.round(count.product_count)
            "
            style="
              margin-top: 1em;
              justify-content: center;
              list-style-type: none;
              width: 100%;
              display: flex;
              padding: 1em 1em;
              border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
              border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
            "
          >
            <li style="margin: 0 0.5em 0 0">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-left']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages - 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages - 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <button
                class="btn btn-primary"
                style="
                  background-color: #39b54a;
                  color: #fff;
                  margin-left: 4.335%;
                  margin-right: 4.335%;
                "
                disbled
              >
                {{ pages }}
              </button>
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/category/page/${pages + 2}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/category/page/${pages + 1}`,
                  query: {
                    category: category,
                    brand: brand,
                    min: min,
                    max: max,
                  },
                }"
              >
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  style="color: #555555; font-size: 10pt"
                />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
import "slick-carousel/slick/slick.css";
import vPagination from "vue-plain-pagination";
import CardProduct from "../../../components/CardProduct.vue";
export default {
  components: { CardProduct },
  name: "Homepage",
  async asyncData({ $productService, $content, params, route, query, error }) {
    const brand = query.brand;
    const min = query.min;
    const max = query.max;
    const category = params.id;
    let checkedNames = [];
    if (brand != null) {
      checkedNames = brand;
    }
    const category_products =
      await $productService.product.getProductCategoryByCode({
        category_page: 1,
        category_code: category,
        category_brand: brand,
        category_min: min,
        category_max: max,
      });
    const category_names =
      await $productService.product.getProductCategoryByCategoryName({
        category_name: category,
      });
    const categorys = await $productService.product.getProductCategoryBy();
    const brands = await $productService.product.getProductBandBy();
    const tenPosts = await $content()
      .only(["author", "createdAt", "description", "path", "title"])
      .sortBy("createdAt", "desc")
      .limit(10)
      .fetch();
    const counts = await $productService.product.getProductCount({
      count_category: category,
      count_keyword: "undefined",
      count_brand: brand,
      count_min: min,
      count_max: max,
    });
    // console.log("category_products", category_products.data);
    const nextPage = tenPosts.length === 10;
    const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;
    return {
      category_products: category_products.data ? category_products.data : [],
      categorys: categorys.data ? categorys.data : [],
      category_names: category_names.data ? category_names.data : [],
      brands: brands.data ? brands.data : [],
      counts: counts.data ? counts.data : [],
      nextPage,
      posts,
      pages: 1,
      category,
      query,
      brand,
      min,
      max,
      checkedNames,
    };
  },
  mounted() {
    this.shoppingCart = JSON.parse(
      localStorage.getItem("shoppingCart") || "[]"
    );
  },
  watch: {
    shoppingCart: {
      handler(newValue) {
        localStorage.setItem("shoppingCart", JSON.stringify(newValue));
      },
      deep: true,
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    check_brand() {
      if (this.checkedNames != "") {
        if (this.min == "") {
          this.min = "undefined";
        }
        if (this.max == "") {
          this.max = "undefined";
        }
        if (this.category == "") {
          this.category = "undefined";
        }
        return this.$router.push(
          {
            path: `/product/category/${this.category}`,
            query: {
              category: this.category,
              brand: this.checkedNames,
              min: this.min,
              max: this.max,
            },
          },
          () => {
            this.$router.app.refresh();
          }
        );
      } else if (this.checkedNames == "") {
        if (this.min == "") {
          this.min = "undefined";
        }
        if (this.max == "") {
          this.max = "undefined";
        }
        if (this.category == "") {
          this.category = "undefined";
        }
        return this.$router.push(
          {
            path: `/product/category/${this.category}`,
            query: {
              min: this.min,
              max: this.max,
            },
          },
          () => {
            this.$router.app.refresh();
            // window.location.reload(true)
          }
        );
      }
    },
    check_price() {
      if (parseInt(this.min) > parseInt(this.max)) {
        this.$bvModal.show("my-modal");
      } else if (
        parseInt(this.min) <= parseInt(this.max) ||
        (this.min == "" && this.max != "") ||
        (this.min != "" && this.max == "")
      ) {
        if (this.min == "") {
          this.min = "undefined";
        }
        if (this.max == "") {
          this.max = "undefined";
        }
        if (this.brand == "") {
          this.brand = "undefined";
        }
        if (this.category == "") {
          this.category = "undefined";
        }
        return this.$router.push(
          {
            path: `/product/category/${this.category}`,
            query: {
              category: this.category,
              brand: this.brand,
              min: this.min,
              max: this.max,
            },
          },
          () => {
            this.$router.app.refresh();
          }
        );
      } else {
        if (this.min == "") {
          this.min = "undefined";
        }
        if (this.max == "") {
          this.max = "undefined";
        }
        if (this.brand == "") {
          this.brand = "undefined";
        }
        if (this.category == "") {
          this.category = "undefined";
        }
        return this.$router.push(
          {
            path: `/product/category/${this.category}`,
            query: {
              brand: this.brand,
              min: this.min,
              max: this.max,
            },
          },
          () => {
            this.$router.app.refresh();
          }
        );
      }
    },
    reset_data() {
      return this.$router.push(
        {
          path: `/product`,
        },
        () => {
          window.location.reload(true);
          // this.$router.app.refresh()
        }
      );
    },
    reset_filter() {
      return this.$router.push(
        {
          path: `/product/category/${this.category}`,
        },
        () => {
          // this.$router.app.refresh();
          window.location.reload(true);
        }
      );
    },
    addToCart(product) {
      let exists = false;
      // console.log("product", product);
      for (const cartItem of this.shoppingCart) {
        // console.log("cartItem.product_code", cartItem.product_code);
        // console.log("this.shoppingCart", this.shoppingCart);
        if (cartItem.product_code === product.product_code) {
          cartItem.amount = cartItem.amount + 1;
          exists = true;
          break;
        }
      }
      if (!exists) {
        this.shoppingCart.push({
          ...product,
          amount: 1,
        });
      }
      window.location.reload(true);
    },
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: false,
      },
      options: {
        infinite: true,
        slidesToShow: 3,
        navButtons: false,
        dots: false,
      },
      rating: 4.3,
      // checkedNames: [],
      keyword: "undefined",
      min: "undefined",
      max: "undefined",
      brand: "undefined",
      contact: false,
      tel: false,
      facebook: false,
      map: false,
      shoppingCart: [],
    };
  },
};
</script>
