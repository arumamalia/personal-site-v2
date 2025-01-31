<script lang="ts" setup>
  interface Project {
    id: string
    image: string
    title?: string
  }

  interface ProjectData {
    body: Project[] | null,
  }

  const { data } = await useAsyncData<ProjectData>('fetch-projects', async () => {
    return await queryContent('/json/projects').findOne() as ProjectData;
  });
</script>

<template>
  <section class="h-200 flex flex-col justify-center gap-8">
    <h2 class="text-center text-3xl">Projects</h2>
    <article class="flex gap-4">
      <button id="prev-project" class="text-3xl shrink-0 cursor-pointer">
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
          <SwiperSlide v-for="slide in data?.body ?? []" :key="slide?.id" >
            <img :src="slide?.image" alt="">
          </SwiperSlide>
        </Swiper>
      </div>
      <button id="next-project" class="text-3xl shrink-0 cursor-pointer">
        <font-awesome icon="chevron-right" />
      </button>
    </article>
  </section>
</template>

<style>
  .swiper-wrapper {
    height: 200px;
  } 

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200;
    font-size: 4rem;
    font-weight: bold;
    border-radius: 12px;
  }

  .swiper-slide img {
    width: 100%;
    height: 100% !important;
    object-fit: cover;
  }
</style>

