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
  <section class="h-screen flex flex-col justify-center gap-8">
    <h2 class="text-center text-3xl">Projects</h2>
    <article class="flex gap-4">
      <button id="prev-project" class="text-3xl shrink-0">
        <font-awesome icon="chevron-left" />
      </button>
      <div class="basis-auto grow-0 w-full overflow-hidden">
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
          :slidesPerView="1" 
          :breakpoints="{
            '768': {
              slidesPerView: 3,
            },
            '1280': {
              slidesPerView: 4,
            }
          }"
          :loop="true"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true
          }" 
          class="w-full"
        >
          <SwiperSlide 
            v-for="(slide, idx) in slides" :key="idx"
            :style="`background-color: ${slide.bg}; color: ${slide.color}`"
          >
            {{ idx }}
          </SwiperSlide>
        </Swiper>
      </div>
      <button id="next-project" class="text-3xl shrink-0">
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

