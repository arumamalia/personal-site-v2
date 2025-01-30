<script setup lang="ts">
  const appConfig = useAppConfig();
  const { site_name } = appConfig?.global?.general || {};
  const date = new Date()
</script>

<template>
  <footer class="text-center py-2">
    <p><small>Copyright &copy; 2024-{{ date.getFullYear()}} {{ site_name }}, All Right Reserved.</small></p>
  </footer>
</template>