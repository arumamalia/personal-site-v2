<script setup lang="ts">
useHead({
  title: 'Selamat Datang di Welcome!',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'bg-gray-900 text-white'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>
<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>