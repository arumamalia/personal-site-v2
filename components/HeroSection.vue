<script setup lang="ts">
const { data: page } = await useAsyncData('content-section-hero', () => {
  return queryCollection('content').path('/hero').first();
});
console.log(page);
</script>
<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
