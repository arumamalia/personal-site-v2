
<script setup lang="ts">
</script>
<template>
  <section class="flex flex-col min-h-screen py-10">
    <article class="flex flex-auto justify-center items-center py-32 w-full">
      <h1 class="text-5xl text-center">
        <slot mdc-unwrap="p" />
      </h1>
    </article>
    <article class="flex flex-initial flex-wrap gap-8">
      <header class="basis-sm">
        <h2 class="text-2xl">
          <slot name="title" mdc-unwrap="p" />
        </h2>
        <h3 class="text-3xl">
          <slot name="subtitle" mdc-unwrap="p" />
        </h3>
      </header>
      <p class="basis-sm grow text-base text-justify">
        <slot name="description" mdc-unwrap="p" />
      </p>
    </article>
  </section>
</template>
