<template>
  <section class="w-full">
    <wave class="bg-slate-100" />
    <section class="container-section">
      <HeaderSection title="Go To Our Wedding" />
      <div class="mt-12 text-center">
        <h1 
          data-aos="zoom-in"
          class="kalam-font text-green-500 text-2xl">Map Location</h1>
        <iframe 
          data-aos="zoom-in"
          class="w-10/12 mx-auto mt-4 mb-8" height="300" 
          src="https://maps.google.com/maps?q=Politeknik%20Hasnur&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          frameborder="0" scrolling="no" 
          marginheight="0" marginwidth="0"></iframe>
        <a 
          data-aos="zoom-in"
          class="px-5 py-2 rounded-lg bg-green-600 text-gray-100 mx-auto">Open Google Map</a>
      </div>
    </section>
  </section>
</template>

<script setup>

import { ref } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import wave from '@/assets/svg/wave.svg'

</script>
