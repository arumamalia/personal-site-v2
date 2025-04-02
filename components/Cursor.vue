<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const cursorX = ref(0);
const cursorY = ref(0);
const isCursorMoving = ref(false);
let timeoutId: number;

const updateCursorPosition = (event: MouseEvent) => {
  // Use clientX and clientY for viewport-relative coordinates
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
  
  isCursorMoving.value = true;
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    isCursorMoving.value = false;
  }, 500);
};

onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition);
  clearTimeout(timeoutId);
});

const darkTheme = useState<boolean>("darkTheme", () => false);
</script>

<template>
  <div class="cursor-container">
    <img 
      :style="{ 
        left: cursorX + 'px', 
        top: cursorY + 'px', 
        opacity: isCursorMoving ? 1 : 0 
      }"
      :src="darkTheme ? './cursor-light.gif' : './cursor-dark.gif'" 
      alt="Following Image" 
      class="follow-cursor" 
    />
  </div>
</template>

<style scoped>
.cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99999;
  overflow: hidden;
}

.follow-cursor {
  position: absolute;
  width: 100px;
  height: 100px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 2s ease;
  z-index: 99999;
}
</style>