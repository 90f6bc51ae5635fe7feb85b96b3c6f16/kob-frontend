<template>
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
      :key="idx"
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
</template>

<script>
export default {
  props: {
    counts: {
      type: Array,
      required: true,
    },
    keyword: {
      type: String,
      default: '',
    },
    brand: {
      type: String,
      default: '',
    },
    min: {
      type: String,
      default: '',
    },
    max: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      pages: 1,
    }
  },
}
</script>