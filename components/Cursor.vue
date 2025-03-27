<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue';

const cursorX = ref(0);
const cursorY = ref(0);
const isCursorMoving = ref(false);

const updateCursorPosition = (event: MouseEvent) => {
  cursorX.value = event.clientX + window.scrollX;
  cursorY.value = event.clientY + window.scrollY;
  isCursorMoving.value = true;

  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    isCursorMoving.value = false;
  }, 500);
};

let timeoutId: number;

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
  <img :style="{ left: (cursorX + 70) + 'px', top: (cursorY + 70) + 'px', opacity: isCursorMoving ? 1 : 0 }"
    :src="darkTheme ? './cursor-light.gif' : './cursor-dark.gif'" alt="Following Image" class="follow-cursor" />
</template>

<style scoped>
.follow-cursor {
  z-index: 99999;
  position: fixed;
  width: 100px;
  height: 100px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 2s ease;
  overflow: scroll;
}
</style>