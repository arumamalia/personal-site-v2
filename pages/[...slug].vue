<script setup lang="ts">
  const route = useRoute();
  const { error } = useAsyncData('content-' + route.path, () => queryContent(route.path).findOne());

  if (error.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }
</script>
<template>
  <ContentDoc v-if="!error" />
</template>
