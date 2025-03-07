<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Metadata {
  title: string;
  description: string;
  image: string;
}

const urls = [
  'https://vue-todo-app-seven-sepia.vercel.app/',
  'https://vue-ip-address-tracker-iota.vercel.app/',
  'https://vue-rest-countries-five.vercel.app/',
  'https://vue-age-calculator-six.vercel.app/'
];

const metadataList = ref<Metadata[]>([]);

onMounted(async () => {
  for (const url of urls) {
    try {
      const response = await axios.get(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
      metadataList.value.push({
        title: response.data.data.title,
        description: response.data.data.description,
        image: response.data.data.image.url,
      });
    } catch (error) {
      console.error(`Error fetching metadata for ${url}:`, error);
    }
  }
});

// First, add a reactive reference to track the current slide index
const currentSlideIndex = ref(0);

// Then, define a computed property to get the current slide's metadata
const currentMetadata = computed(() => {
  if (metadataList.value.length && currentSlideIndex.value < metadataList.value.length) {
    return metadataList.value[currentSlideIndex.value];
  }
  return { title: '', description: '' };
});

// Update your slide-change handler
const handleSlideChange = (swiper) => {
  // Update the current slide index based on swiper's active index
  currentSlideIndex.value = swiper.realIndex; // using realIndex for proper handling when loop is enabled
};
</script>

<template>
  <section class="flex flex-row items-center justify-between pt-8 pb-12 projects" id="projects">
    <article class="flex gap-6 project-arrow">
      <button id="prev-project" class="text-3xl shrink-0 cursor-pointer arrow">
        <font-awesome icon="chevron-left" />
      </button>
      <div class="overflow-hidden">
        <Swiper :height="50" :modules="[
          SwiperAutoplay,
          SwiperNavigation
        ]" :navigation="{
            nextEl: '#next-project',
            prevEl: '#prev-project',
          }" :slidesPerView="1" :breakpoints="{
            '768': {
              slidesPerView: 1,
            },
            '1280': {
              slidesPerView: 1,
            }
          }" :loop="true" :autoplay="{
            delay: 2000,
            disableOnInteraction: true
          }" @slideChange="handleSlideChange">
          <SwiperSlide v-for="(item, index) in metadataList" :key="index">
            <a :href="urls[index]" target="_blank" class="cursor-pointer">
              <img :src="item.image" alt="">
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <button id="next-project" class="text-3xl shrink-0 cursor-pointer arrow">
        <font-awesome icon="chevron-right" />
      </button>
    </article>
    <article class="flex flex-col gap-3 project-wrapper w-[344px] container-project">
      <div class="flex flex-col items-center border-t-6 border-b-6 w-max h-max">
        <h1 class="font-bernard leading-none text-project">PROJECTS</h1>
        <h2 class="font-bevan leading-none text-revealed">REVEALED</h2>
      </div>
      <div class="flex flex-col items-center gap-2 desc-project">
        <h1 class="font-oswald project-title">{{ currentMetadata.title }}</h1>
        <p class="text-sm project-desc text-justify desc">{{ currentMetadata.description }}</p>
      </div>
    </article>
  </section>
</template>

<style>
.swiper-slide {
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