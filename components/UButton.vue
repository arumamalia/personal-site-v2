<template>
    <button class="flex items-center gap-2" :class="$attrs.class" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script setup>
defineEmits(['click']);
</script>