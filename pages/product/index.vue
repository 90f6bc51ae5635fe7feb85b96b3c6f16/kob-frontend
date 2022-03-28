<template>
  <div>
    <b-row>
      <b-col class="title-product">รายการสินค้า</b-col>
    </b-row>
    <b-row style="padding-top: 30px">
      <b-col cols="3">
        <ul class="w3-ul" style="border: 0.2px solid #e5e5e5">
          <li
            style="
              font-weight: 500;
              padding: 5px;
              padding-left: 10px;
              text-align: left;
              background-color: #f8f8f8;
              border: 0.2px solid #e5e5e5;
            "
          >
            CATEGORIES
          </li>
          <li
            style="
              padding: 5px;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            "
          >
            Jill
          </li>
          <li
            style="
              padding: 5px;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            "
          >
            Eve
          </li>
          <li
            style="
              padding: 5px;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            "
          >
            Adam
          </li>
        </ul>
        <b-row>
          <b-col style="font-weight: 500; padding: 15px">FLITER BY</b-col>
        </b-row>
        <ul class="w3-ul" style="border: 0.2px solid #e5e5e5">
          <li
            style="
              font-weight: 500;
              padding: 5px;
              padding-left: 10px;
              text-align: left;
              background-color: #f8f8f8;
              border: 0.2px solid #e5e5e5;
            "
          >
            BRANDS
            <b-button variant="outline" size="sm" style="float: right">
              <font-awesome-icon
                :icon="['fas', 'angle-down']"
                style="color: #000"
            /></b-button>
          </li>
          <li
            style="
              padding: 5px;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            "
          >
            Jill
          </li>
          <li
            style="
              padding: 5px;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            "
          >
            Eve
          </li>
          <li
            style="
              padding: 5px;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            "
          >
            Adam
          </li>
          <li
            style="
              font-weight: 500;
              padding: 5px;
              padding-left: 10px;
              text-align: left;
              background-color: #f8f8f8;
              border: 0.2px solid #e5e5e5;
            "
          >
            PRICE

            <b-button variant="outline" size="sm" style="float: right">
              <font-awesome-icon
                :icon="['fas', 'angle-down']"
                style="color: #000"
            /></b-button>
          </li>
          <li
            style="
              padding: 5px;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            "
          >
            Jill
          </li>
          <li
            style="
              padding: 5px;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            "
          >
            Eve
          </li>
          <li
            style="
              padding: 5px;
              color: #777777;
              text-align: left;
              padding: 5px;
              border: 0.2px solid #e5e5e5;
            "
          >
            Adam
          </li>
        </ul>
      </b-col>
      <b-col cols="" style="display: flex; flex-wrap: wrap">
        <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
        <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
        <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
        <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
        <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
                <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
                <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
                <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
                <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
                <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
                <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
                <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
                <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
                <b-col class="card-product" cols="3">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="product-name">Cillcips Air Purifier A215</div>
          <div class="product-price">$124.00</div>
        </b-col>
      </b-col>
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
.card-product {
  padding-left: 0;
  padding-right: 0;
  flex: 1 0 21%; /* explanation below */
  border: 1px solid #e4e4e4;
}
.product-name {
  text-align: center;
}
.product-price {
  font-weight: 500;
  text-align: center;
}
.title-product {
  padding-top: 1em;
  font-family: "Kanit";
  font-size: 1em;
  font-weight: 500;
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 20px;
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