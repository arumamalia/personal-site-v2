<script lang="ts" setup>
const slides = ref(Array.from({ length: 10 }, () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  // Figure out contrast color for font
  const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

  return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
}))
</script>

<template>
  <section class="h-screen flex flex-col gap-8 justify-center">
    <h2 class="text-center text-3xl">Projects</h2>
    <article class="flex">
      <button id="prev-project" class="text-3xl">
        <font-awesome icon="chevron-left" />
      </button>
      <Swiper 
        :height="300" 
        :spaceBetween="20"
        :modules="[
          SwiperAutoplay,
          SwiperNavigation
        ]" 
        :navigation="{
          nextEl: '#next-project',
          prevEl: '#prev-project',
        }"
        :slidesPerView="4" 
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true
        }" 
        class="w-11/12"
      >
        <SwiperSlide 
          v-for="(slide, idx) in slides" :key="idx"
          :style="`background-color: ${slide.bg}; color: ${slide.color}`"
        >
          {{ idx }}
        </SwiperSlide>
      </Swiper>
      <button id="next-project" class="text-3xl">
        <font-awesome icon="chevron-right" />
      </button>
    </article>
  </section>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
  font-size: 4rem;
  font-weight: bold;
  border-radius: 12px;
}
</style>

