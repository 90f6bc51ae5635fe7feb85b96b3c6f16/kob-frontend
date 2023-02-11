<template>
  <div>
    <div class="" style="margin: 0 -2em 0 -1em">
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
    </div>
    <b-row class="title-product" style="margin: -1em -2em auto -1em">
      <b-col
        md="6"
        sm="12"
        class="list-product"
        style="font-size: 16pt; margin: auto 0 auto -0.7em"
      >
        รายการสินค้า
      </b-col>
      <b-col
        md="6"
        sm="12"
        class="history-page"
        style="font-size: 12pt; margin: auto -1em auto 0"
      >
        HOME / SHOP /
        <span style="color: #888888"> SHOP SIDEBAR LEFT </span>
      </b-col>
    </b-row>

    <b-row class="row-content" style="padding-top: 30px">
      <b-col sm="12" md="3" class="col-fliter">
        <div style="background-color: #f8f8f8; border: 0.2px solid #e5e5e5">
          <b-button
            class="d-flex justify-between mb-0"
            block
            v-b-toggle.collapse
            variant="outline"
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 8px 20px;
              font-size: 12pt;
            "
          >
            CATEGORIES
            <font-awesome-icon
              :icon="['fas', 'angle-down']"
              style="color: #000"
            />
          </b-button>
          <b-collapse
            id="collapse"
            style="
              margin: 0 0 0 0;
              background-color: #fff;
              max-height: 250px;
              overflow: auto;
            "
          >
            <b-list-group>
              <b-list-group-item
                v-for="(category, idx) in categorys"
                :key="'B' + idx"
                :href="`/product/category/${category.product_category_code}`"
                style="font-size: 12pt; padding: 5px 5px 5px 20px"
              >
                {{ category.product_category_name }}
              </b-list-group-item>
            </b-list-group>
          </b-collapse>
        </div>
        <b-row>
          <b-col style="font-weight: 500; padding: 15px; font-size: 13pt"
            >FLITER BY</b-col
          >
        </b-row>
        <div style="background-color: #f8f8f8; border: 0.2px solid #e5e5e5">
          <b-button
            class="d-flex justify-between mb-0"
            block
            v-b-toggle.collapse1
            variant="outline"
            size="sm"
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 8px 20px;
              font-size: 12pt;
            "
          >
            BRANDS
            <font-awesome-icon
              :icon="['fas', 'angle-down']"
              style="color: #000"
            />
          </b-button>
          <b-collapse
            id="collapse1"
            style="
              margin: 0 0 0 0;
              background-color: #fff;
              max-height: 250px;
              overflow: auto;
            "
          >
            <b-list-group>
              <b-list-group-item
                v-for="(brand, idx) in brands"
                :key="'C' + idx"
              >
                <input
                  type="checkbox"
                  checked
                  :name="`${brand.product_brand_code}`"
                  :value="`${brand.product_brand_code}`"
                  v-model="checkedNames"
                  style="margin: 0 5px 0 10px"
                  @change="check_brand($event)"
                />
                {{ brand.product_brand_name }}
              </b-list-group-item>
            </b-list-group>
          </b-collapse>
        </div>
        <div style="background-color: #f8f8f8; border: 0.2px solid #e5e5e5">
          <b-button
            class="d-flex justify-between mb-0"
            block
            v-b-toggle.collapse2
            variant="outline"
            size="sm"
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 8px 20px;
              font-size: 12pt;
            "
          >
            PRICE
            <font-awesome-icon
              :icon="['fas', 'angle-down']"
              style="color: #000"
            />
          </b-button>
          <b-collapse id="collapse2" style="background-color: #fff">
            <div
              style="
                padding-left: 11px;
                font-size: 12pt;
                color: #777777;
                text-align: left;
                padding: 5px;
                border: 0.2px solid #e5e5e5;
                text-align: center;
              "
            >
              <input
                placeholder="ใส่ราคาต่ำสุด"
                v-model="min"
                type="number"
                style="
                  margin-top: 0.5em;
                  width: 80%;
                  font-size: 12pt;
                  border: 2px solid rgb(229, 229, 229);
                  border-radius: 3px;
                "
              />
              <p style="margin: 0.5em 0.3em 0 0.3em">ถึง</p>
              <input
                placeholder="ใส่ราคาสูงสุด"
                v-model="max"
                type="number"
                style="
                  margin-top: 0.5em;
                  width: 80%;
                  font-size: 12pt;
                  border: 2px solid rgb(229, 229, 229);
                  border-radius: 3px;
                "
              />
              <p style="margin-top: 0.4em; text-align: center" id="demo"></p>
              <button
                type="submit"
                class="btn btn-success"
                style="width: 40%"
                @click="check_price()"
              >
                ยืนยัน
              </button>
            </div>
          </b-collapse>
        </div>
        <b-row>
          <b-col
            style="
              font-weight: 500;
              padding: 15px;
              font-size: 13pt;
              text-align: center;
            "
            ><button
              type="submit"
              class="btn btn-danger"
              style="width: 80%"
              @click="reset_filter()"
            >
              ลบตัวกรองสินค้าทั้งหมด
            </button></b-col
          >
        </b-row>
      </b-col>
      <b-col class="col-product">
        <b-col
          class="col-card-product"
          sm="12"
          md="3"
          v-for="(product, idx) in products"
          :key="'D' + idx"
        >
          <card-product :item="product" :rating="true" />
        </b-col>
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
        :key="'E' + idx"
      >
        <div
          v-if="count.product_count == 0"
          style="margin-top: 1em; margin-bottom: 10em; text-align: center"
        >
          <p>ไม่พบสินค้า</p>
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 3}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>

            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 3}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 3}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 4}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 4 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 3}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 3}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 4}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 4 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 3}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
          <!-- <div style="margin-top: 1em;
                                  justify-content: center;
                                  list-style-type: none;
                                  width: 100%;
                                  display: flex;
                                  padding: 1em 1em;
                                  border-bottom: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-left: 0px solid rgba(0, 0, 0, 0.14) !important;
                                  border-right: 0px solid rgba(0, 0, 0, 0.14) !important;
                        ">
                    Page {{pages}} of {{Math.round(count.product_count)}}
                    </div> -->
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 3}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 4}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 4 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 3}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 3}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 4}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 4 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 3}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 3 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages - 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages - 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages - 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 1 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0.5em 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="margin-left: 4.335%; margin-right: 4.335%"
                :to="{
                  path: `/product/page/${pages + 2}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
                }"
                >{{ pages + 2 }}</nuxt-link
              >
            </li>
            <li style="margin: 0 0 0 0.5em">
              <nuxt-link
                class="btn btn-outline-primary"
                style="float: right"
                :to="{
                  path: `/product/page/${pages + 1}`,
                  query: { keyword: keyword, brand: brand, min: min, max: max },
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
import CardProduct from "../../components/CardProduct.vue";
export default {
  name: "Homepage",
  async asyncData({ $productService, $content, params, route, query, error }) {
    const brand = query.brand;
    const min = query.min;
    const max = query.max;
    const keyword = query.keyword;
    let checkedNames = [];
    if (brand != null) {
      checkedNames = brand;
    }
    const products = await $productService.product.getProductPage({
      product_page: 1,
      page_min: min,
      page_max: max,
      page_brand: brand,
    });
    const counts = await $productService.product.getProductCount({
      // count_category: query.category,
      count_keyword: keyword,
      count_min: min,
      count_max: max,
      count_brand: brand,
    });
    // console.log("min",min);
    // console.log("max",max);

    const categorys = await $productService.product.getProductCategoryBy();
    const brands = await $productService.product.getProductBandBy();
    const tenPosts = await $content()
      .only(["author", "createdAt", "description", "path", "title"])
      .sortBy("createdAt", "desc")
      .limit(10)
      .fetch();
    // console.log("brands",brands.data);
    const nextPage = tenPosts.length === 10;
    const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;
    return {
      products: products.data ? products.data : [],
      categorys: categorys.data ? categorys.data : [],
      counts: counts.data ? counts.data : [],
      brands: brands.data ? brands.data : [],
      nextPage,
      posts,
      pages: 1,
      query,
      min,
      max,
      brand,
      keyword,
      checkedNames,
    };
  },
  components: {
    vPagination,
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
    check_price() {
      if (parseInt(this.min) > parseInt(this.max)) {
        document.getElementById("demo").innerHTML =
          "ใส่จำนวนเงิน น้อยสุด และ มากสุด !";
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
        document.getElementById("demo").innerHTML = "";
        return this.$router.push(
          {
            path: `/product`,
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
        return this.$router.push(
          {
            path: `/product`,
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
    check_brand() {
      // console.log("this.checkedNames",this.checkedNames);
      if (this.checkedNames != "") {
        if (this.min == "") {
          this.min = "undefined";
        }
        if (this.max == "") {
          this.max = "undefined";
        }
        return this.$router.push(
          {
            path: `/product`,
            query: {
              brand: this.checkedNames,
              min: this.min,
              max: this.max,
            },
          },
          () => {
            this.$router.app.refresh();
            // window.location.reload(true)
          }
        );
      } else if (this.checkedNames == "") {
        console.log("checkedNames", this.checkedNames[0]);
        if (this.min == "") {
          this.min = "undefined";
        }
        if (this.max == "") {
          this.max = "undefined";
        }
        return this.$router.push(
          {
            path: `/product`,
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
    reset_filter() {
      return this.$router.push(
        {
          path: `/product/`,
        },
        () => {
          // this.$router.app.refresh()
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
      // brand:'',
      keyword: "undefined",
      min: "undefined",
      max: "undefined",
      brand: "undefined",
      contact: false,
      tel: false,
      facebook: false,
      map: false,
      isHidden: false,
      shoppingCart: [],
    };
  },
};
</script>

<style scoped>
.col-fliter {
  margin: -1em -2em auto -1em;
}

.col-product {
  display: flex;
  flex-wrap: wrap;
  margin: -1em -2em 0 1em;
}
.history-page {
  text-align: right;
}

@media only screen and (max-width: 600px) {
  .list-product {
    padding-left: 30px;
  }
  .history-page {
    text-align: left;
  }
  .col-product {
    display: block;
    flex-wrap: wrap;
    margin: 0 -2em 0 0;
  }

  .col-fliter {
    margin: auto;
  }
  .title-product {
    padding: 0px 5px 0px 5px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .title-product {
    padding: 0px 5px 0px 5px;
  }
  .list-product {
    padding-left: 30px;
  }
  .row-content {
    padding: 0px 10px 0px 5px;
  }
  .col-fliter {
    margin-left: 0.1em;
  }
  .col-product {
    gap: 1.5em;
    margin-left: 1em;
  }
  .col-card-product {
    min-width: 230px;
  }
}

.left {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 59%;
  right: 50%;
  /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
  text-align: center;
}

.right {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 59%;
  left: 50%;
  /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
  text-align: center;
}

.left:hover .text {
  background-color: #39b44f;
}

.right:hover .text {
  background-color: #39b44f;
}

.card-product:hover {
  box-shadow: 0 0 5px rgba(33, 33, 33, 0.5);
  border: 1px solid #ccc;
}

style .card-product:hover .image {
  opacity: 0.3;
}

.card-product:hover .left {
  opacity: 1;
  background-color: green;
  width: 50%;
  border: 1px solid #eaecee;
}

.card-product:hover .right {
  opacity: 1;
  background-color: green;
  width: 50%;
  border: 1px solid #eaecee;
}

.text {
  background-color: white;
  color: white;
  font-size: 16px;
  padding: 5px 44px;
}

div {
  font-family: "Kanit";
}

.col-card-product {
  padding-left: 0;
  padding-right: 0;
  /* flex: 1 0 21%; */
  /* explanation below */
}

.product-name {
  margin-top: 0.3em;
  text-align: center;
  color: #444444;
  font-size: 12pt;
  /* font-family: "Myriad"; */
  text-decoration: none !important;
}

.product-price {
  font-weight: 500;
  text-align: center;
  color: #222222;
  font-size: 12pt;
  /* font-family: "Myriad Pro"; */
}

.text-overflow {
  padding: 0 1em 0 1em;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title-product {
  padding-top: 2em;
  font-family: "Kanit";
  font-size: 1em;
  font-weight: auto;
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 20px;
}

.carousel-wrapper {
  padding-top: 40px;
  padding-bottom: 40px;
}

.img-wrapper img {
  margin: auto;
  background-image: linear-gradient(gray 100%, transparent 0);
}

.vue-star-rating {
  justify-content: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid rgb(0 0 0 / 14%);
  border-left: 1px solid rgb(0 0 0 / 14%);
  border-right: 1px solid rgb(0 0 0 / 14%);
}

#example-collapse {
  padding-right: 1.5px;
}

#example-collapse a {
  font-size: 12pt;
  text-align: center;
  color: #666666;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
}

#example-collapse a:hover {
  color: #fff;
  background-color: #39b44f !important;
  box-sizing: border-box;
}

.divCheckbox {
  display: none !important;
}

.manu-sidebar {
  position: fixed !important;
  font-size: 24px !important;
  width: 50px;
  margin-top: 12%;
  margin-left: 2em;
  float: right;
  display: block;
  text-align: center;
}

.manu-sidebar-a {
  /* border: 0.2px solid #e5e5e5; */
  margin-top: 5px;
  /* background-color: #fff; */
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
