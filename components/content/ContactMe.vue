<script setup lang="ts">
const darkTheme = useState<boolean>("darkTheme", () => false);

import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const name = ref<string>('');
const email = ref<string>('');
const subject = ref<string>('');
const message = ref<string>('');
const form = ref<HTMLFormElement | null>(null);

const runtimeConfig = useRuntimeConfig();

const sendEmail = () => {
  if (form.value) {
    console.log(form);
    console.log(form.value);
    
    const templateParams = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    };

    emailjs.send(
      runtimeConfig.public.emailjsServiceId,
      runtimeConfig.public.emailjsTemplateId,
      templateParams,
      runtimeConfig.public.emailjsPublicKey,

    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        name.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
      }, (error) => {
        console.log('FAILED...', error);
      });
  }
};

</script>
<template>
  <section class="flex flex-row justify-center contactme-wrapper" id="contact-me">
    <img class="h-[120px] aspect-auto icon-msg" :src="darkTheme ? './icon-msg-light.png' : './icon-msg-dark.png'">
    <form ref="form" action="#" @submit.prevent="sendEmail" class="flex flex-wrap gap-x-4 w-full">
      <TextField v-model="name" class="basis-[220px] grow text-field" name="name" label="Name" />
      <TextField v-model="email" class="basis-[220px] grow text-field" name="email" label="Email" />
      <TextField v-model="subject" class="basis-[220px] grow text-field" name="subject" label="Subject" />
      <TextField v-model="message" class="basis-md grow" name="message" label="Message" />
      <button type="submit" class="cursor-pointer">
        <img class="h-[34px] btn-msg" :src="darkTheme ? './btn-msg-light.png' : './btn-msg-dark.png'">
      </button>
    </form>
  </section>
</template>