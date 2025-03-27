<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const loader = useState<boolean>("loader", () => false);
</script>

<template>
    <div v-if="loader" class="fullscreen-lottie backdrop-brightness-50">
        <DotLottieVue src="https://lottie.host/1f74a87d-4da0-45e8-b637-c2082a459ae6/LNV1HJISsQ.lottie" speed="1" loop
            autoplay />
    </div>
</template>

<style scoped>
.fullscreen-lottie {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
}
</style>