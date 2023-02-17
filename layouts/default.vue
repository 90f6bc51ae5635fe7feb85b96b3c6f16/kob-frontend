<template>
  <div style="background-color: #f5f5f5">
    <Navbar />
    <b-container
      fluid="lg"
      class="px-lg-3 py-lg-1"
      style="background-color: #ffffff"
    >
      <Nuxt />
      <SideBar />
    </b-container>
    <Advantage />
    <Footer />
  </div>
</template>

<style>
html {
  font-family: "Kanit";
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ffd000;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #f5b041;
}
</style>
