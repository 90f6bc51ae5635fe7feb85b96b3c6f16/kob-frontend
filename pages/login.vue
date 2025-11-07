<template>
  <form class="form-login" @submit="onSubmit">
    <b-img class="w-100 h-auto" src="~/assets/Logo.png" alt="Image"></b-img>
    <div class="text-center mt-4">
      <h3>Log In</h3>
    </div>
    <b-form-group label="Username" label-for="input-email">
      <b-form-input id="input-email" type="text" v-model="email" placeholder="อีเมล"></b-form-input>
    </b-form-group>
    <b-form-group label="Password" label-for="input-password">
      <b-form-input id="input-password" v-model="password" type="password" placeholder="รหัสผ่าน">
      </b-form-input>
    </b-form-group>
    <b-alert class="mt-2" :show="is_error" variant="danger">Invalid password</b-alert>
    <b-button type="submit" variant="success" block squared>Login</b-button>
    <b-form-checkbox class="mt-2" v-model="is_remember_me">Remember Me</b-form-checkbox>
    <div class="d-flex justify-content-between">
      <a href="/register" variant="primary" size="md" style="">Register</a>
      <span> Forgot <a href="/resetpassword">password ?</a> </span>
    </div>
  </form>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      is_error: false,
      is_remember_me: false,
      email: "",
      password: "",
    };
  },
  methods: {
    check() {
      if (this.email == '') {
        this.$swal.fire({
          type: "error",
          // title: "เกิดข้อผิดพลาด",
          text: "กรุณากรอกอีเมล",
        });
        return false

      } else if (this.password == '') {
        this.$swal.fire({
          type: "error",
          // title: "เกิดข้อผิดพลาด",
          text: "กรุณากรอกรหัสผ่าน",
        });
        return false

      } else {
        return true
      }
    },
    async onSubmit(e) {
      e.preventDefault();
      if (this.check()) {
        try {
          this.is_error = false;

          await this.$auth
            .loginWith("local", {
              data: {
                email: this.email,
                password: this.password,
              },
            })
            .then(async (response) => {
              await this.$cookies.set(
                "user",
                response.data[0],
                {
                  domain: this.$config.APP_DOMAIN,
                  maxAge: 60 * 60 * 24 * 7,
                  secure: true,
                },
                this.$router.push("/")
              );
            })
            .catch((e) => {
              this.$swal.fire({
                type: "error",
                title: "เกิดข้อผิดพลาด",
                text: "กรุณาใช้อีเมลและรหัสผ่านใหม่",
              });
            });
        } catch (error) {
          console.log("error", error);

          this.is_error = true;
        }
      }
    },

  },
};
</script>

<style scoped>
.form-login {
  width: 240px;
  margin: auto;
  margin-top: 10em;
  margin-bottom: 13em;
}

/* responsive */
@media only screen and (max-width: 500px) {

  /* mobile devices */
  .form-login {
    width: 90%;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 501px) {

  /* Ipads, Tablets */
  .form-login {
    width: 50%;
  }
}

@media only screen and (min-width: 1025px) {
  .form-login {
    width: 30%;
  }
}
</style>