<template>
  <section class="w-full">
    <wave class="bg-slate-100" />
    <section class="container-section">
      <HeaderSection title="Go To Our Wedding" />
      <div class="mt-10 flex flex-wrap justify-center gap-3">
        <template v-for="(value, name, index) in countdown" :key="index">
          <div 
            data-aos="zoom-in"
            class="text-center w-4/12 bg-gray-100 p-2 rounded-lg">
            <p class="text-3xl text-green-500 mb-2">{{ value }}</p>
            <p class="kalam-font text-lg font-bold">{{ name }}</p>
          </div>
        </template>
      </div>
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

const countdown = ref(null)

// Handler for countdown
const createTimer = (target, container, cb) => {
   // target => UNIX time target
   // Container => variable for return result
   // cb => callback if countdown finish

   const now = new Date().getTime()
   const distance = target - now
   if ( distance > 0 ) {
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
     container.value = { days, hours, minutes, seconds }
     //alert(JSON.stringify(container))
      
     if (days === 0 && hours === 0 && minutes === 0 && seconds === 0 ) cb()
   } else {
     container.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
   } 
}

const timer = setInterval(() => {
  createTimer(new Date('2022-05-23 08:30').getTime(), countdown, () => {
    clearInterval(timer)
  })
}, 1000)

</script>
