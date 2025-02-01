<script setup lang="ts">
  const route = useRoute();
  const contentType = route.path.split('/').filter(x => x)[0];
  const { error } = await useAsyncData('content-' + route.path, () => queryContent(route.path).findOne());

  if (error.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }
</script>

<template>
  <ContentDoc 
    :id="contentType === 'docs' ? 'content-docs' : 'content'" 
    tag="article" class="pt-[59.98px]"
    v-if="!error" 
  />
</template>

<style>
  @reference "../assets/css/main.css";

  #content-docs h1 {
    @apply text-5xl font-bold mb-2;
  }

  #content-docs p {
    @apply text-base mb-2;
  }
</style>
