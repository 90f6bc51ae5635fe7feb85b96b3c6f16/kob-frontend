<template lang="">
  <div>

  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const db = await $axios.$get('http://127.0.0.1:6666/api/product');
    console.log("DB",db);
    return{
      db
    };
  },
}
</script>
<style lang="">

</style>
