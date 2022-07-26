<template>
<div>
    <Navbar />
    <b-container fluid="lg" class="no-gutters" style="margin:auto;">
        <Nuxt />
    </b-container>
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
    background: #F5B041;
}

</style>
