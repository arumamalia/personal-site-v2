
<script setup lang="ts">
</script>
<template>
  <section class="flex flex-col min-h-screen py-10">
    <article class="flex flex-auto justify-center items-center py-32 w-full">
      <h1 class="text-5xl text-center">
        <ContentSlot unwrap="p" />
      </h1>
    </article>
    <article class="flex flex-initial flex-wrap gap-8">
      <header class="basis-sm">
        <h2 class="text-2xl">
          <ContentSlot name="title" unwrap="p" />
        </h2>
        <h3 class="text-3xl">
          <slot name="subtitle" unwrap="p" />
        </h3>
      </header>
      <p class="basis-sm grow text-base text-justify">
        <ContentSlot name="description" unwrap="p" />
      </p>
    </article>
  </section>
</template>
