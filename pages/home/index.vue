<template>
  <div>
    <b-row class="no-gutters">
      <b-col cols="3">
        <b-collapse id="example-collapse">
          <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </b-collapse>
      </b-col>
      <b-col>
        <b-carousel
          id="carousel-no-animation"
          style="text-shadow: 0px 0px 2px #000"
          no-animation
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide
            caption="First slide"
            img-src="https://picsum.photos/1024/480/?image=10"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Second Slide"
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Third Slide"
            img-src="https://picsum.photos/1024/480/?image=22"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Fourth Slide"
            img-src="https://picsum.photos/1024/480/?image=23"
          ></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>

    <!-- <div class="carousel-wrapper">
      <client-only>
        <slick :options="slickOptions" ref="refs">
          <div v-for="i in 5" :key="i" class="img-wrapper">
            <img src="https://placeimg.com/480/480/any?1" />
          </div>
        </slick>
      </client-only>
    </div> -->

    <div class="carousel-wrapper">
      <client-only>
        <agile :options="options" ref="carousel">
          <div v-for="i in 5" :key="i" class="img-wrapper">
            <img :src="`https://placeimg.com/480/480/any?${i}`" />
          </div>
        </agile>
      </client-only>
    </div>

    <b-row>
      <b-col class="title-product">สินค้าใหม่ล่าสุด</b-col>
      <b-col class="title-product">
        <div style="text-align: right">
          <button @click="$refs.carousel.goToPrev()" class="btn">
            <font-awesome-icon
              :icon="['fas', 'angle-left']"
              style="color: #000"
            />
          </button>
          <button @click="$refs.carousel.goToNext()" class="btn">
            <font-awesome-icon
              :icon="['fas', 'angle-right']"
              style="color: #000"
            />
          </button></div
      ></b-col>
    </b-row>
    <b-row>
      <b-col class="title-product-sub">สินค้าใหม่ล่าสุด</b-col>
    </b-row>
    <b-row class="row-product">
      <b-col class="card-product">
        <b-card-img
          src="https://picsum.photos/400/400/?image=20"
          alt="Image"
          class="rounded-0"
        ></b-card-img>
        <div class="product-name">Cillcips Air Purifier A215</div>
        <div class="product-price">$124.00</div>
      </b-col>
      <b-col class="card-product">
        <b-card-img
          src="https://picsum.photos/400/400/?image=20"
          alt="Image"
          class="rounded-0"
        ></b-card-img>
        <div class="product-name">Cillcips Air Purifier A215</div>
        <div class="product-price">$124.00</div>
      </b-col>
      <b-col class="card-product">
        <b-card-img
          src="https://picsum.photos/400/400/?image=20"
          alt="Image"
          class="rounded-0"
        ></b-card-img>
        <div class="product-name">Cillcips Air Purifier A215</div>
        <div class="product-price">$124.00</div>
      </b-col>
      <b-col class="card-product">
        <b-card-img
          src="https://picsum.photos/400/400/?image=20"
          alt="Image"
          class="rounded-0"
        ></b-card-img>
        <div class="product-name">Cillcips Air Purifier A215</div>
        <div class="product-price">$124.00</div>
      </b-col>
      <b-col class="card-product">
        <b-card-img
          src="https://picsum.photos/400/400/?image=20"
          alt="Image"
          class="rounded-0"
        ></b-card-img>
        <div class="product-name">Cillcips Air Purifier A215</div>
        <div class="product-price">$124.00</div>
      </b-col>
    </b-row>

    <b-row class="row-product">
      <b-col class="row-product-type">
        <b-img
          src="~/assets/electronics.png"
          alt="Image"
          class="rounded"
          width="56"
          height="56"
          style="margin-top: 2"
        ></b-img>
        <div
          style="
            padding-top: 20px;
            margin-bottom: 20px;
            font-size: 1.2em;
            color: #fff;
          "
        >
          ELECTRONICS
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
          "
        >
          Mobile Accessories
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Hitech
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Unboxed Mobiles
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Bluetooth Devices
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Screen Guards
        </div>
        <div
          style="
            padding: 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          MP3 Players
        </div>
      </b-col>
      <b-col class="card-product" cols="7">
        <b-row class="no-gutters">
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
        </b-row>
        <b-row class="no-gutters">
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        class="card-product"
        style="width : 100%;height 100%; background-color : #ADADAD"
      >
        <div></div>
      </b-col>
    </b-row>

    <b-row class="row-product">
      <b-col
        class=""
        style="
          background-color: #ff6289 !important;
          text-align: center;
          padding-top: 2em;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 20px;
        "
      >
        <b-img
          src="~/assets/heath.png"
          alt="Image"
          class="rounded"
          width="56"
          height="56"
          style="margin-top: 2"
        ></b-img>
        <div
          style="
            padding-top: 20px;
            margin-bottom: 20px;
            font-size: 1.2em;
            color: #fff;
          "
        >
          Health & Beauty
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
          "
        >
          Mobile Accessories
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Hitech
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Unboxed Mobiles
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Bluetooth Devices
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Screen Guards
        </div>
        <div
          style="
            padding: 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          MP3 Players
        </div>
      </b-col>
      <b-col class="card-product" cols="7">
        <b-row class="no-gutters">
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
        </b-row>
        <b-row class="no-gutters">
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        class="card-product"
        style="width : 100%;height 100%; background-color : #ADADAD"
      >
        <div></div>
      </b-col>
    </b-row>

    <b-row class="row-product">
      <b-col
        class=""
        style="
          background-color: #ecb856 !important;
          text-align: center;
          padding-top: 2em;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 20px;
        "
      >
        <b-img
          src="~/assets/home.png"
          alt="Image"
          class="rounded"
          width="56"
          height="56"
          style="margin-top: 2"
        ></b-img>
        <div
          style="
            padding-top: 20px;
            margin-bottom: 20px;
            font-size: 1.2em;
            color: #fff;
          "
        >
          Home & Living
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
          "
        >
          Mobile Accessories
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Hitech
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Unboxed Mobiles
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Bluetooth Devices
        </div>
        <div
          style="
            padding: 10px 0px 10px 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          Screen Guards
        </div>
        <div
          style="
            padding: 10px;
            font-size: 1em;
            color: #fff;
            text-align: left;
            border-bottom: 1px solid #fff;
          "
        >
          MP3 Players
        </div>
      </b-col>
      <b-col class="card-product" cols="7">
        <b-row class="no-gutters">
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
        </b-row>
        <b-row class="no-gutters">
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
          <b-col class="card-product">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
            <div class="product-name">Cillcips Air Purifier A215</div>
            <div class="product-price">$124.00</div>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        class="card-product"
        style="width : 100%;height 100%; background-color : #ADADAD"
      >
        <div></div>
      </b-col>
    </b-row>

    <b-row class="no-gutters" style="padding-top: 20px">
      <b-col class="no-gutters">
        <div style="position: absolute; top: 50px; left: 100px">
          <div style="font-size: 1.5em; font-weight: 500; color: #fff">
            SUMMER COLLECTION
          </div>
        </div>
        <div style="position: absolute; top: 80px; left: 10em">
          <div style="font-size: 1.2em; font-weight: 500; color: #fff">
            New Women's Collections
          </div>
        </div>
        <div style="position: absolute; top: 120px; left: 16em">
          <div style="font-size: 1.2em; font-weight: 500">
            <b-button variant="outline-light">SHOP NOW</b-button>
          </div>
        </div>
        <img :src="`https://placeimg.com/480/200/any?2`" style="width: 100%" />
      </b-col>
      <b-col class="no-gutters">
        <div style="position: absolute; top: 50px; left: 15em">
          <div style="font-size: 1.5em; font-weight: 500; color: #fff">
            SUMMER COLLECTION
          </div>
        </div>
        <div style="position: absolute; top: 80px; left: 16em">
          <div style="font-size: 1.2em; font-weight: 500; color: #fff">
            New Women's Collections
          </div>
        </div>
        <div style="position: absolute; top: 120px; left: 16em">
          <div style="font-size: 1.2em; font-weight: 500">
            <b-button variant="outline-light">SHOP NOW</b-button>
          </div>
        </div>
        <img :src="`https://placeimg.com/480/200/any?2`" style="width: 100%"
      /></b-col>
    </b-row>
  </div>
</template>

<script>
import "slick-carousel/slick/slick.css";
export default {
  name: "Homepage",
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: false,
      },
    };
  },
  data() {
    return {
      options: {
        infinite: true,
        slidesToShow: 3,
        navButtons: false,
        dots: false,
      },
    };
  },
};
</script>
<style scoped>
div {
  font-family: "Kanit";
}
.title-product {
  font-family: "Kanit";
  font-size: 1.5em;
  font-weight: 500;
}
.title-product-sub {
  font-family: "Kanit";
  font-size: 1em;
  font-weight: 500;
  color: hsl(0, 0%, 66%);
}
.row-product {
  padding-top: 50px;
}
.product-name {
  text-align: center;
}
.product-price {
  font-weight: 500;
  text-align: center;
}
.row-product-type {
  background-color: #39b54a !important;
  text-align: center;
  padding-top: 2em;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 20px;
}
.card-product {
  padding-left: 0;
  padding-right: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: transparent;
  border: 1px solid #adadad;
}
#example-collapse {
  padding-right: 2px;
}
li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li {
  text-align: center;
  border-bottom: 1px solid #adadad;
}

li:last-child {
  border-bottom: none;
}

li a.active {
  background-color: #04aa6d;
  color: white;
}

li a:hover:not(.active) {
  background-color: #adadad;
  color: white;
}
.carousel-wrapper {
  padding-top: 40px;
  padding-bottom: 40px;
}
.img-wrapper img {
  margin: auto;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>