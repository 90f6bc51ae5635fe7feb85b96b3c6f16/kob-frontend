<template>
  <div class="text-center pt-5">
    <h1 v-if="error.statusCode === 404">
      <font-awesome-icon :icon="['fa', 'frown-open']" /> 404 Page not found
    </h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "empty",
};
</script>