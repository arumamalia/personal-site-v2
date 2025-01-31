<script setup lang="ts">
  const route = useRoute();
  const { data: page } = useAsyncData('content-' + route.path, () => queryContent(route.path).findOne());

  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }
</script>
<template>
  <ContentDoc />
</template>
