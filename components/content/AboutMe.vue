<script setup lang="ts">
defineSlots<{
  intro: () => string,
  name: () => string,
  description1: () => string,
  description2: () => string,
  description3: () => string,
  description4: () => string,
}>();

const darkTheme = useState<boolean>("darkTheme", () => false);
</script>
<template>
  <section class="flex flex-col" id="about-me">
    <article class="flex flex-auto justify-center items-center w-full">
      <h1 class="text-center font-anton leading-none intro">
        <ContentSlot unwrap="p" />
      </h1>
    </article>
    <div class="flex flex-row items-center gap-20">
      <article class="flex flex-col gap-3">
        <div class="flex flex-row gap-5 head-abtme">
          <div class="flex flex-col w-full">
            <header class="font-anton">
              <h2 class="text-4xl greet" :class="darkTheme ? 'text-yellow' : 'text-blue'">
              </h2>
              <h3 class="text-6xl name">
                <ContentSlot :use="$slots.name" unwrap="p" />
              </h3>
            </header>
            <p class="text-sm text-justify desc lg:hidden desc1-up">
              <ContentSlot :use="$slots.description1" unwrap="p" />
            </p>
          </div>
          <div class="flex justify-center w-1/2 lg:hidden moving-img-wrapper">
            <img class="moving-img" src="../../public/moving-img.gif">
          </div>
        </div>
        <div class="flex flex-row gap-5 lg:hidden mobile-desc-abtme">
          <p class="text-sm text-justify desc hidden lg:hidden desc1">
            <ContentSlot :use="$slots.description1" unwrap="p" />
          </p>
          <p class="text-sm text-justify flex-1 desc">
            <ContentSlot :use="$slots.description2" unwrap="p" />
          </p>
          <p class="text-sm text-justify flex-1 desc">
            <ContentSlot :use="$slots.description3" unwrap="p" />
          </p>
          <p class="text-sm text-justify flex-1 desc">
            <ContentSlot :use="$slots.description4" unwrap="p" />
          </p>
        </div>
        <div class="flex-row gap-7 hidden lg:flex">
          <div class="flex flex-col gap-5 w-1/2">
            <p class="text-sm text-justify desc">
              <ContentSlot :use="$slots.description1" unwrap="p" />
            </p>
            <p class="text-sm text-justify desc">
              <ContentSlot :use="$slots.description2" unwrap="p" />
            </p>
          </div>
          <div class="flex flex-col gap-5 w-1/2">
            <p class="text-sm text-justify desc">
              <ContentSlot :use="$slots.description3" unwrap="p" />
            </p>
            <p class="text-sm text-justify desc">
              <ContentSlot :use="$slots.description4" unwrap="p" />
            </p>
          </div>
        </div>
      </article>
      <img class="hidden lg:block h-[480px] moving-img" src="../../public/moving-img.gif">
    </div>
  </section>
</template>
