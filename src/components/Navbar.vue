<template>
  <header class="navbar">
    <nav class="container mx-auto flex justify-between items-center py-3">
      <NuxtLink class="text-xl text-left w-[200px]" to="#">Menu</NuxtLink>
      <NuxtLink class="text-3xl text-center uppercase" to="/">Logo</NuxtLink>
      <NuxtLink class="text-xl text-right w-[200px]" to="#contact">Get in Touch</NuxtLink>
    </nav>
  </header>
</template>
<style lang="postcss">
  .navbar {
    background-color: #2f3131;
    color: #fff;
  }
</style>