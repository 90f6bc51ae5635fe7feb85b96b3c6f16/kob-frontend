<template>
  <div class="mt-4">
    <div class="pl-md-3">
      <h4>เปลี่ยนรหัส</h4>
      <hr />
      <form>
        <b-row>
          <b-col sm="8" md="6">
            <b-form-group label="รหัสผ่านปัจจุบัน" label-for="recent-password">
              <b-input
                type="password"
                id="recent-password"
                v-model="recent_password"
              ></b-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="8" md="6">
            <b-form-group label="รหัสผ่านใหม่" label-for="new-password">
              <b-input
                type="password"
                id="new-password"
                v-model="new_password"
              ></b-input>
            </b-form-group>
          </b-col>
          <b-col sm="8" md="6">
            <b-form-group label="ยืนยันรหัสผ่าน" label-for="confirm-password">
              <b-input
                type="password"
                id="confirm-password"
                v-model="confirm_password"
              ></b-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-button class="px-4" variant="success" squared> บันทึก </b-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // middleware: ["auth"],
  layout: "user-account",
  data() {
    return {
      recent_password: "",
      new_password: "",
      confirm_password: "",
    };
  },
};
</script>