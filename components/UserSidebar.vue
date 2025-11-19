<template>
  <div v-if="loggedIn" class="d-block d-lg-none">
    <b-button v-b-toggle.user-sidebar class="ml-2" variant="outline-light">
      <font-awesome-icon :icon="['fas', 'user']" class="text-dark" />
    </b-button>
    <b-sidebar id="user-sidebar" backdrop-variant="dark" backdrop shadow right>
      <b-list-group class="rounded-0">
        <b-list-group-item
          :variant="
            $route.path.includes(`/user/account/profile`) ? 'secondary' : ''
          "
          :href="`/user/account/profile`"
        >
          <font-awesome-icon :icon="['fas', 'circle-user']" class="mr-2" />
          My Profile
        </b-list-group-item>
        <b-list-group-item
          :variant="
            $route.path.includes(`/user/account/address`) ? 'secondary' : ''
          "
          :href="`/user/account/address`"
        >
          <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-2" />
          My Address Book
        </b-list-group-item>
        <b-list-group-item
          :variant="
            $route.path.includes(`/user/account/password`) ? 'secondary' : ''
          "
          :href="`/user/account/password`"
        >
          <font-awesome-icon :icon="['fas', 'key']" class="mr-1" />
          Change Password
        </b-list-group-item>
        <b-list-group-item
          :variant="$route.path.includes(`/user/purchase`) ? 'secondary' : ''"
          :href="`/user/purchase`"
        >
          <font-awesome-icon :icon="['fas', 'bag-shopping']" class="mr-2" />
          My Purchase
        </b-list-group-item>
        <b-list-group-item
          class="text-center text-danger"
          @click="logout"
          style="cursor: pointer"
        >
          Logout
        </b-list-group-item>
      </b-list-group>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  middleware: "checkAuth",
  computed: {
    loggedIn() {
      return this.$store?.state?.auth?.loggedIn;
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    },
  },
};
</script>