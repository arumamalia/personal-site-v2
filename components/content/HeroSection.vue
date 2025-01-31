<script setup lang="ts">
const { data: page } = await useAsyncData('content-section-hero', () => {
  return queryContent('/hero').findOne();
});
</script>
<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
