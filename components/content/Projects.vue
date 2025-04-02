<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

interface Metadata {
  title: string;
  description: string;
  image: string;
  url: string;
}

const urls = [
  'https://vue-todo-app-seven-sepia.vercel.app/',
  'https://vue-ip-address-tracker-iota.vercel.app/',
  'https://vue-rest-countries-five.vercel.app/',
  'https://vue-age-calculator-six.vercel.app/'
];

const metadataList = ref<Metadata[]>([]);
const isLoading = ref(true);
const error = ref(null);
const currentSlideIndex = ref(0);

// Fetch all metadata before initializing the swiper
const fetchMetadata = async () => {
  try {
    isLoading.value = true;
    const results = await Promise.allSettled(
      urls.map(url =>
        axios.get(`https://api.microlink.io/?url=${encodeURIComponent(url)}`)
          .then(response => ({
            title: response.data.data.title || 'Untitled Project',
            description: response.data.data.description || 'No description available',
            image: response.data.data.image?.url || '/placeholder-image.jpg',
            url
          }))
          .catch(() => ({
            title: 'Error loading project',
            description: 'Could not load project details',
            image: '/placeholder-image.jpg',
            url
          }))
      )
    );

    metadataList.value = results.map(result =>
      result.status === 'fulfilled' ? result.value : {
        title: 'Error loading project',
        description: 'Could not load project details',
        image: '/placeholder-image.jpg',
        url: urls[results.indexOf(result)] || '#'
      }
    );
  } catch (err) {
    error.value = err;
    console.error('Error fetching metadata:', err);
  } finally {
    isLoading.value = false;
  }
};

const currentMetadata = computed(() => {
  return metadataList.value[currentSlideIndex.value] || {
    title: 'Loading...',
    description: 'Please wait while we load the project details',
    image: '/placeholder-image.jpg',
    url: '#'
  };
});

const handleSlideChange = (swiper) => {
  currentSlideIndex.value = swiper.realIndex;
};

onMounted(() => {
  fetchMetadata();
});
</script>

<template>
  <section class="flex flex-row items-start justify-between pt-8 pb-12 projects" id="projects">
    <article class="flex gap-6 project-arrow">
      <button id="prev-project" class="text-3xl shrink-0 cursor-pointer arrow">
        <font-awesome icon="chevron-left" />
      </button>

      <div class="overflow-hidden" v-if="!isLoading && !error">
        <Swiper :modules="[SwiperAutoplay, SwiperNavigation]" :navigation="{
          nextEl: '#next-project',
          prevEl: '#prev-project',
        }" :slides-per-view="1" :loop="true" :autoplay="{
            delay: 5000, // Increased delay for better UX
            disableOnInteraction: true
          }" @slide-change="handleSlideChange">
          <SwiperSlide v-for="(item, index) in metadataList" :key="index">
            <a :href="item.url" target="_blank" class="cursor-pointer">
              <img :src="item.image" :alt="item.title" loading="lazy" class="swiper-image">
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      <div v-else-if="isLoading" class="flex items-center justify-center w-full h-full">
        <p>Loading projects...</p>
      </div>

      <div v-else class="flex items-center justify-center w-full h-full text-red-500">
        <p>Error loading projects. Please try again later.</p>
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

.swiper-image {
  aspect-ratio: 16/9;
  background-color: #f0f0f0;
}

/* Add transitions for smoother changes */
.project-title,
.project-desc {
  transition: opacity 0.3s ease;
}

/* Loading state styles */
.loading {
  opacity: 0.7;
}
</style>