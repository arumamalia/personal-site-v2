<script setup>
const {company_name, description} = await queryCollection('json').first();
const query = await queryCollection('json').all();

console.log(query);

</script>
<template>
  <HeroSection :companyName="company_name" :description="description" />
  <OurServiceSection />
  <ProjectSection />
  <ContactSection />
</template>