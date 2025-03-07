<script setup lang="ts">
defineSlots<{
  intro: () => string
}>();

interface Experience {
  job_position: string
  company: string
  period: string
  job_desc: string[]
}

interface ExperienceList {
  body: Experience[]
}

// const { data } = await useAsyncData<ExperienceList>('experience', () => 
//   queryContent('/json/experience').findOne()
// );

const { data } = await useAsyncData<ExperienceList>('fetch-projects', async () => {
  return await queryContent('/json/experience').findOne() as ExperienceList;
});

const darkTheme = useState<boolean>("darkTheme", () => false);
</script>

<template>
  <section class="flex flex-col" id="experience">
    <h1 class="text-5xl font-stencil exp">
      <span class="font-oswald text-3xl exp-there">THERE ARE &nbsp;</span>
      <ContentSlot unwrap="p" />
    </h1>
    <div v-if="data" class="flex gap-10 exp-wrapper">
      <div v-for="(job, index) in data.body" :key="index" class="">
        <div class="flex flex-row items-start gap-3">
          <img class="h-[36px] hand-pointing"
            :src="darkTheme ? './hand-pointing-light.png' : './hand-pointing-dark.png'">
          <div class="flex flex-col">
            <h2 class="text-3xl font-bold font-abril leading-none job-pst">{{ job.job_position }}</h2>
            <h3 class="text-base job-cmp"><b>{{ job.company }}</b> <span class="text-sm desc"
                :class="darkTheme ? 'text-[#AD885E]' : 'text-gray-600'">({{ job.period }})</span></h3>
          </div>
        </div>
        <ul class="list-disc list-inside pl-[16px]">
          <li v-for="(desc, descIndex) in job.job_desc" :key="descIndex" class="text-sm desc">
            {{ desc }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style>
ul>li {
  list-style-position: outside;
}
</style>