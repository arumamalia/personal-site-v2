<script setup lang="ts">
const form = reactive({
  fullname: "",
  email: "",
  phone: "",
  message: "",
})

const submit = () => {
  const { fullname, email, phone, message } = form;
  console.log("submit", {
    fullname,
    email,
    phone,
    message
  });
}

</script>
<template>
  <section class="h-150 flex flex-col justify-center mx-auto max-w-300">
    <h2 class="text-center text-white text-5xl mb-12">Get in Touch</h2>
    <form action="#" @submit.prevent="submit" class="flex flex-wrap gap-x-4 justify-center w-full">
      <TextField v-model="form.fullname" class="basis-sm grow" name="fullname" label="Name" />
      <TextField v-model="form.email" class="basis-sm grow" name="email" label="Email" />
      <TextField v-model="form.phone" class="basis-sm grow" name="phone" label="Phone" />
      <TextArea v-model="form.message" class="w-full" name="message" label="Message" />
      <button
        class="hover:bg-white border cursor-pointer hover:text-gray-900 bg-gray-900 text-white font-bold rounded-md min-w-36 my-2 py-2"
      >
        Send
      </button>
    </form>
  </section>
</template>
