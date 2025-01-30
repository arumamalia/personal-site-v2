<script setup lang="ts">
const { data: page } = useAsyncData('content-hero', () => {
  // return queryCollection('content').where('stem', '=', 'index').first()
  return queryCollection('content').path('/hero').first();
});
</script>
<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
