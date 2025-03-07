<script setup lang="ts">
const appConfig = useAppConfig();
const { site_name } = appConfig?.global?.general || {};
const date = new Date()
const darkTheme = useState<boolean>("darkTheme", () => false);

</script>

<template>
  <footer
    class="flex justify-between items-center py-2 mx-auto p-container footer">
    <p class="text-sm desc">&copy;{{ date.getFullYear() }} designed by arum amalia</p>
    <div class="flex flex-row gap-7 socmed-wrapper">
      <a target="_blank" href="https://www.linkedin.com/in/arum-amalia/">
        <img class="aspect-square h-[30px] socmed" :src="darkTheme ? './linkedin-light.png' : './linkedin-dark.png'">
      </a>
      <a target="_blank" href="https://github.com/arumamalia">
        <img class="aspect-square h-[30px] socmed" :src="darkTheme ? './github-light.png' : './github-dark.png'">
      </a>
    </div>
    <div class="flex flex-row items-center gap-2">
      <p class="text-sm desc">develop using</p>
      <img class="h-[20px] aspect-square" src="../public/vue.png">
    </div>
  </footer>
</template>