<script setup lang="ts">
definePageMeta({
  layout: false
})

const route = useRoute()

const { data: page } = await useAsyncData('content' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
