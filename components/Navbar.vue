<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
const appConfig = useAppConfig();
const { site_name } = appConfig?.global?.general || {};
const isScrolling = useState<boolean>("isScrolling", () => false);
const onScroll = () => {
  isScrolling.value = window.scrollY > 8;
};
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

const darkTheme = useState<boolean>("darkTheme", () => false);
const setTheme = () => {
  darkTheme.value = !darkTheme.value;
}

const isMenuOpen = useState<boolean>("isMenuOpen", () => false);
const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

</script>
<template>
  <header class="fixed top-0 z-10 w-full transition-[backdrop-filter,padding] duration-600 ease-in-out"
    :class="{ 'backdrop-brightness-75 backdrop-blur-lg py-2': isScrolling }">
    <nav
      class="flex flex-row flex-wrap justify-center items-center gap-x-4 h-max mx-auto p-container"
      :class="isScrolling ? 'text-lg' : 'text-[32px]'">
      <div class="flex flex-row justify-between items-center h-max"
        :class="isScrolling ? 'gap-x-1 mr-auto' : 'w-full py-2'">
        <NuxtLink to="#">
          <img :class="isScrolling ? 'h-[32px]' : 'logo'" :src="darkTheme ? './logo-light.png' : './logo-dark.png'"
            alt="Logo" />
        </NuxtLink>
        <NuxtLink class="font-days leading-none" :class="isScrolling ? 'text-2xl' : 'title-daily'" to="#"><span
            class="font-cookie" :class="isScrolling ? 'text-lg' : 'title-the'">The
          </span>DAILY CODE</NuxtLink>
      </div>
      <NuxtLink class="leading-none lg:block hidden" :class="isScrolling ? 'sub-menu-scr' : 'sub-menu'" to="#">HOME
      </NuxtLink>
      <img class="lg:block hidden" :class="isScrolling ? 'h-[14px] star-scr' : 'star'"
        :src="darkTheme ? './star-light.png' : './star-dark.png'">
      <NuxtLink class="leading-none lg:block hidden" :class="isScrolling ? 'sub-menu-scr' : 'sub-menu'" to="#about-me">
        ABOUT ME</NuxtLink>
      <img class="lg:block hidden" :class="isScrolling ? 'h-[14px] star-scr' : 'star'"
        :src="darkTheme ? './star-light.png' : './star-dark.png'">
      <NuxtLink class="leading-none lg:block hidden" :class="isScrolling ? 'sub-menu-scr' : 'sub-menu'" to="#experience">
        EXPERIENCE</NuxtLink>
      <img class="lg:block hidden" :class="isScrolling ? 'h-[14px] star-scr' : 'star'"
        :src="darkTheme ? './star-light.png' : './star-dark.png'">
      <NuxtLink class="leading-none lg:block hidden" :class="isScrolling ? 'sub-menu-scr' : 'sub-menu'" to="#projects">
        PROJECTS</NuxtLink>
      <img class="lg:block hidden" :class="isScrolling ? 'h-[14px] star-scr' : 'star'"
        :src="darkTheme ? './star-light.png' : './star-dark.png'">
      <NuxtLink class="leading-none lg:block hidden" :class="isScrolling ? 'sub-menu-scr' : 'sub-menu'" to="#contact-me">
        CONTACT ME</NuxtLink>
      <button class="flex leading-none h-full" :class="isScrolling ? 'ml-6 text-xs' : 'theme'" @click="setTheme">
        <span class="font-medium">{{ darkTheme ? 'Lumos' : 'Nox' }}</span>
        <font-awesome icon="wand-magic-sparkles" class="ml-2" />
      </button>
      <button class="flex justify-end items-center grow lg:hidden"
        :class="[isMenuOpen ? 'hidden' : 'block', { 'menu-sm': isScrolling }]" @click="openMenu">
        <p class="text-base font-semibold leading-none font-menu">MENU</p>
        <img class="h-[16px]" :src="darkTheme ? './brm-menu-light.svg' : './brm-menu-dark.svg'">
      </button>
      <button class="flex justify-end items-center grow" :class="isMenuOpen ? 'block' : 'hidden'" @click="openMenu">
        <font-awesome icon="bolt-lightning" class="text-base" />
      </button>
    </nav>
  </header>
  <!-- Modal -->
  <VueFinalModal v-model="isMenuOpen">
    <transition name="slide">
      <div v-if="isMenuOpen" class="mt-[74px] fixed inset-0" @click.self="isMenuOpen = false">
        <div class="p-6 rounded-lg shadow-lg w-64 backdrop-brightness-75 backdrop-blur-3xl h-max">
          <div class="flex flex-col gap-4">
            <NuxtLink class="leading-none" to="#">HOME</NuxtLink>
            <NuxtLink class="leading-none" to="#about-me">ABOUT ME</NuxtLink>
            <NuxtLink class="leading-none" to="#experience">EXPERIENCE</NuxtLink>
            <NuxtLink class="leading-none" to="#projects">PROJECTS</NuxtLink>
            <NuxtLink class="leading-none" to="#contact-me">CONTACT ME</NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </VueFinalModal>
</template>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>