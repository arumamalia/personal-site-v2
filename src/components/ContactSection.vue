<template>
  <section class="h-150 flex flex-col justify-center mx-auto max-w-300">
    <h2 class="text-center text-white text-5xl mb-12">Get in Touch</h2>
    <form action="#" class="flex flex-wrap gap-x-4 justify-center w-full">
      <TextField class="basis-sm grow" name="fullname" label="Name" />
      <TextField class="basis-sm grow" name="email" label="Email" />
      <TextField class="basis-sm grow" name="phone" label="Phone" />
      <TextArea class="w-full" name="message" label="Message" />
      <button 
        class="hover:bg-white border cursor-pointer hover:text-gray-900 bg-gray-900 text-white font-bold rounded-md min-w-36 my-2 py-2" 
        type="button"
      >
        Send
      </button>
    </form>
  </section>
</template>
