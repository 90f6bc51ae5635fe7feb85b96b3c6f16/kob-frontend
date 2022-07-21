<template>
<div>
    <div class="" style="margin: 0 -2em 0 -1em;">
        <b-collapse id="example-collapse" style="
              width: 100%;
              margin: 0 0 0 0;
              max-height: 250px;
              overflow: auto;

            ">
            <div v-for="category in categorys" :key="category.product_category_code">
                <ul>
                    <li>
                        <nuxt-link :to="{ path: `/product/category/${category.product_category_code}` }">
                            {{category.product_category_name}}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </b-collapse>
    </div>
    <b-row style="margin: 0 -2em 0 -1em;">
        <b-col class="title-product" style="font-size: 16pt;">ข้อมูลที่จัดส่ง</b-col>
    </b-row>
    <b-row style="padding-top: 30px; margin: 0 -2em 0 -1.9em;">
        <b-col cols="3">
            <ul class="my" style="">
                <li style="padding: 5px; color: #777777; text-align: left; padding: 5px">
                    <nuxt-link :to="{ path: `/profile` }">
                        <font-awesome-icon :icon="['fas', 'circle-user']" style="color: #000" />
                        My Details
                    </nuxt-link>
                </li>
                <li style="padding: 5px; color: #777777; text-align: left; padding: 5px">
                    <nuxt-link :to="{ path: `/address` }">
                        <font-awesome-icon :icon="['fas', 'location-dot']" style="color: #000" />
                        My address book
                    </nuxt-link>
                </li>
                <li style="padding: 5px; color: #777777; text-align: left; padding: 5px">
                    <nuxt-link :to="{ path: `/order` }">
                        <font-awesome-icon :icon="['fas', 'bag-shopping']" style="color: #000" />
                        My Order
                    </nuxt-link>
                </li>
            </ul>
        </b-col>
        <b-col cols="9" style="border: 0.2px solid #e5e5e5">
            <b-row>
                <b-col class="title-product">ที่อยู่ของฉัน</b-col>
                <b-col class="title-product">
                    <div style="text-align: right">
                        <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
                        <button v-b-modal.modal-1 class="btn-success btn" style="border-radius: 0px">
                            <font-awesome-icon :icon="['fas', 'plus']" style="color: #fff" />
                            เพิ่มที่อยู่
                        </button>
                    </div>
                </b-col>
            </b-row>
            <div style="padding: 10px">
                <b-row>
                    <b-col cols="3">ชื่อ-นามสกุล</b-col>
                    <b-col cols="5">วรายุทธ โชโตวงษ์</b-col>
                    <b-col cols="1"></b-col>
                    <b-col cols="3"></b-col>
                </b-row>
                <b-row style="">
                    <b-col cols="3">โทรศัพท์</b-col>
                    <b-col cols="5">(+66) 807272521</b-col>
                    <b-col cols="1"></b-col>
                    <b-col cols="3"></b-col>
                </b-row>
                <b-row style="">
                    <b-col cols="3">ที่อยู่</b-col>
                    <b-col cols="5">269/2 ถนนสุรนารายณ์ ซอยสุรนารายณ์3/11 อำเภอเมืองนครราชสีมา,
                        จังหวัดนครราชสีมา, 30000</b-col>
                    <b-col cols="1">
                        <button class="btn-secondary btn" style="border-radius: 0px; margin-bottom: 10px">
                            แก้ไข
                        </button>
                    </b-col>
                    <b-col cols="3">
                        <button class="btn-secondary btn" style="border-radius: 0px">
                            ตั้งเป็นค่าตั้งต้น
                        </button>
                    </b-col>
                </b-row>
            </div>

            <div style="padding: 10px">
                <b-row>
                    <b-col cols="3">ชื่อ-นามสกุล</b-col>
                    <b-col cols="5">วรายุทธ โชโตวงษ์</b-col>
                    <b-col cols="1"></b-col>
                    <b-col cols="3"></b-col>
                </b-row>
                <b-row style="">
                    <b-col cols="3">โทรศัพท์</b-col>
                    <b-col cols="5">(+66) 807272521</b-col>
                    <b-col cols="1"></b-col>
                    <b-col cols="3"></b-col>
                </b-row>
                <b-row style="">
                    <b-col cols="3">ที่อยู่</b-col>
                    <b-col cols="5">269/2 ถนนสุรนารายณ์ ซอยสุรนารายณ์3/11 อำเภอเมืองนครราชสีมา,
                        จังหวัดนครราชสีมา, 30000</b-col>
                    <b-col cols="1">
                        <button class="btn-secondary btn" style="border-radius: 0px; margin-bottom: 10px">
                            แก้ไข
                        </button>
                    </b-col>
                    <b-col cols="3">
                        <button class="btn-secondary btn" style="border-radius: 0px">
                            ตั้งเป็นค่าตั้งต้น
                        </button>
                    </b-col>
                </b-row>
            </div>

            <div style="padding: 10px">
                <b-row>
                    <b-col cols="3">ชื่อ-นามสกุล</b-col>
                    <b-col cols="5">วรายุทธ โชโตวงษ์</b-col>
                    <b-col cols="1"></b-col>
                    <b-col cols="3"></b-col>
                </b-row>
                <b-row style="">
                    <b-col cols="3">โทรศัพท์</b-col>
                    <b-col cols="5">(+66) 807272521</b-col>
                    <b-col cols="1"></b-col>
                    <b-col cols="3"></b-col>
                </b-row>
                <b-row style="">
                    <b-col cols="3">ที่อยู่</b-col>
                    <b-col cols="5">269/2 ถนนสุรนารายณ์ ซอยสุรนารายณ์3/11 อำเภอเมืองนครราชสีมา,
                        จังหวัดนครราชสีมา, 30000</b-col>
                    <b-col cols="1">
                        <button class="btn-secondary btn" style="border-radius: 0px; margin-bottom: 10px">
                            แก้ไข
                        </button>
                    </b-col>
                    <b-col cols="3">
                        <button class="btn-secondary btn" style="border-radius: 0px">
                            ตั้งเป็นค่าตั้งต้น
                        </button>
                    </b-col>
                </b-row>
            </div>
        </b-col>
    </b-row>
    <b-modal id="modal-1" title="ที่อยู่">
        <div style="padding-bottom: 10px">
            <b-form-input placeholder="ชื่อ-นามสกุล"></b-form-input>
        </div>
        <div style="padding-bottom: 10px">
            <b-form-input placeholder="โทรศัพท์"></b-form-input>
        </div>
        <div style="padding-bottom: 10px; padding-top: 10px">
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div style="padding-bottom: 10px">
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div style="padding-bottom: 10px">
            <b-form-input placeholder="Post Code / ZIP"></b-form-input>
        </div>
        <div style="padding-bottom: 10px">
            <b-form-input placeholder="รายะเอียดที่อยู่"></b-form-input>
        </div>
    </b-modal>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                name: "",
                food: null,
                checked: [],
            },
            foods: [{
                    text: "Select One",
                    value: null
                },
                "Carrots",
                "Beans",
                "Tomatoes",
                "Corn",
            ],
            options: [{
                    value: null,
                    text: "Please select an option"
                },
                {
                    value: "a",
                    text: "This is First option"
                },
                {
                    value: "b",
                    text: "Selected Option"
                },
                {
                    value: {
                        C: "3PO"
                    },
                    text: "This is an option with object value"
                },
                {
                    value: "d",
                    text: "This one is disabled",
                    disabled: true
                },
            ],
            show: true,
        };
    },
    async asyncData({
        $axios,
        params
    }) {
        const categorys = await $axios.$get('http://127.0.0.1:3001/api/product-category');
        return {
            categorys
        };
    },
    // middleware: 'auth',
    // async asyncData({ $axios }) {
    //   $axios.setHeader('Authorization', null)
    //   const [user, repos] = await Promise.all([
    //     $axios.$get('https://api.github.com/users/warayutpetch'),
    //     $axios.$get(
    //       'https://api.github.com/users/warayutpetch/repos?sort=pushed&per_page=100'
    //     )
    //   ])
    //   return { user, repos }
    // }
};
</script>

<style scoped>
div {
    font-family: 'Kanit', sans-serif;
}

.my{
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: transparent;
    border: 1px solid #adadad;
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


li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

li {
    text-align: center;
}

li:last-child {
    border-bottom: none;
}

li a.active {
    background-color: #04aa6d;
    color: white;
}

li a:hover:not(.active) {
    background-color: #39b54a;
    color: white;
}

.title-product {
    padding-top: 1em;
    font-family: "Kanit";
    font-size: 1em;
    font-weight: 500;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 20px;
}
</style>
