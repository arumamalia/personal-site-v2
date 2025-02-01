<script setup lang="ts">
const appConfig = useAppConfig();
const { site_name } = appConfig?.global?.general || {};

const isScrolling = useState<boolean>("isScrolling", () => false);

const onScroll = () => {
  isScrolling.value = window.scrollY > 60;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header
    class="text-white fixed top-0 z-10 w-full transition-all duration-500 ease-in-out"
    :class="{ 'backdrop-brightness-75 backdrop-blur-lg': isScrolling }"
  >
    <nav class="container mx-auto flex justify-between items-center px-4 lg:px-0 py-3">
      <article class="basis-1/6 text-left">
        <NuxtLink class="text-sm md:text-xl" to="#">Menu</NuxtLink>
      </article>
      <article class="flex-1 text-center">
        <NuxtLink class="text-2xl lg:text-3xl uppercase" to="/">{{ site_name }}</NuxtLink>
      </article>
      <article class="basis-1/6 text-right">
        <NuxtLink class="text-sm md:text-xl" to="#contact">Get in Touch</NuxtLink>
      </article>
    </nav>
  </header>
</template>
