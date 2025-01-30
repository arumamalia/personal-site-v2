<script setup lang="ts">
const props = defineProps<{companyName: string, description: string}>();
</script>
<template>
  <section class="flex flex-col min-h-screen py-10">
    <article class="flex flex-auto justify-center items-center py-32 w-full">
      <h1 class="text-5xl text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
    </article>
    <article class="flex flex-initial flex-wrap gap-8">
      <header class="basis-sm">
        <h2 class="text-2xl">About Us</h2>
        <h3 class="text-3xl">{{ props.companyName }}</h3>
      </header>
      <p class="basis-sm grow text-base text-justify">{{ props.description }}</p>
    </article>
  </section>
</template>
