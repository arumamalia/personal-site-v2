<template>
    <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="fixed inset-0 bg-black bg-opacity-50" @click="$emit('update:modelValue', false)"></div>
        <div class="relative z-10">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
});

defineEmits(['update:modelValue', 'click']);
</script>