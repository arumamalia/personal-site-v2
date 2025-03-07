<script setup lang="ts">
const appConfig = useAppConfig();
const { site_name, site_description, favicon } = appConfig?.global?.general || {};

const darkTheme = useState<boolean>("darkTheme", () => false);

const bodyClass = computed(() => {
  return darkTheme.value ? 'bg-[#2F3131] text-[#D1B99E]' : 'bg-[#D1B99E] text-[#2F3131]';
});

useHead({
  title: site_name,
  meta: [
    { name: 'description', content: site_description }
  ],
  bodyAttrs: {
    class: bodyClass,
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: favicon },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Days+One&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cookie&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anton&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bernard+MT+Condensed' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bevan&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap' },
  ]
})

onMounted(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      transition: background-color 1s ease, color 1s ease;
    }
  `;
  document.head.appendChild(style);
});
</script>
<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>