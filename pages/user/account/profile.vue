<template>
  <div>
    <h4>ข้อมูลของฉัน</h4>
    <hr />
    <b-form>
      <b-row>
        <b-col>
          <b-form-group label="First Name:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              placeholder="ชื่อ"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Last Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="นามสกุล"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="BIRTH DATE:" label-for="input-2">
            <b-form-datepicker
              v-model="form.birth_date"
              class="mb-2"
              placeholder="วันเกิด"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            label="Email:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="อีเมล"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="PHONE NUMBER:" label-for="input-2">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="เบอร์โทรศัพท์"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button variant="primary" class="px-4">Save</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "user-account",
  data() {
    return {
      form: {
        birth_date: null,
        email: "",
        name: "",
      },
    };
  },
  // async asyncData({ $axios }) {
  //   $axios.setHeader('Authorization', null)
  //   const [user, repos] = await Promise.all([
  //     $axios.$get('https://api.github.com/users/warayutpetch'),
  //     $axios.$get(
  //       'https://api.github.com/users/warayutpetch/repos?sort=pushed&per_page=100'
  //     )
  //   ])
  //   return { user, repos }
  // },
  beforeMount() {
    this.$store.commit("setActiveUserMenu", "account-profile");
  },
};
</script>