<script setup lang="ts">
const appConfig = useAppConfig();
const { site_name, site_description } = appConfig?.global?.general || {};
useHead({
  title: site_name,
  meta: [
    { name: 'description', content: site_description }
  ],
  bodyAttrs: {
    class: 'bg-gray-900 text-white',
  },
})
</script>
<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>