<template>
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
  </b-list-group>
</template>