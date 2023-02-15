<template>
  <div>
    <Navbar />
    <b-container fluid="lg" class="px-lg-0">
      <b-row no-gutters style="min-height: calc(100vh - 260px)">
        <b-col md="3" class="mt-4 d-none d-lg-block">
          <user-menu />
        </b-col>
        <b-col class="mt-4">
          <Nuxt class="pl-md-3" />
        </b-col>
      </b-row>
      <SideBar class="d-none d-lg-block" />
    </b-container>
    <Footer class="mt-4" />
  </div>
</template>