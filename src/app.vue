<script setup lang="ts">
useHead({
  title: 'Selamat Datang di Welcome!',
  meta: [
    { name: 'description', content: 'Selamat datang di web company profile website candi mangkrak.' }
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