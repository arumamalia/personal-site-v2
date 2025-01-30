<script setup>
const route = useRoute()
const { data: response } = await useAsyncData('content-' + route.path, () => queryCollection('json').first());
const { company_name, description } = response.value;
const { data: query } = await useAsyncData('test-query', () => queryCollection('json').where('stem', '=', 'json/index').first());

console.log(query.value);

</script>
<template>
  <HeroSection :companyName="company_name" :description="description" />
  <OurServiceSection />
  <ProjectSection />
  <ContactSection />
</template>