<script setup lang="ts">
  const props = defineProps<{ name: string; label: string }>();
  const model = defineModel();

  const darkTheme = useState<boolean>("darkTheme", () => false);
</script>

<template>
  <label
    :for="props.name"
    class="text-md relative p-3 my-2 block border-b-2 focus-within:ring-b-2"
    :class="darkTheme ? 'focus-within:border-[#D1B99E] focus-within:ring-[#D1B99E]' : 'focus-within:border-[#2f3131] focus-within:ring-[#2f3131]'"
  >
    <input
      :id="props.name"
      class="peer w-full border-none placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
      :placeholder="props.label"
      v-model="model"
    />

    <span
      class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
      :class="darkTheme ? 'peer-placeholder-shown:text-[#D1B99E] peer-focus:text-[#D1B99E]' : 'peer-placeholder-shown:text-[#2f3131] peer-focus:text-[#2f3131]'"
    >
      {{ props.label }}
    </span>
  </label>
</template>
