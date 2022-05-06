<template>
  <section class="container-section">
    <wave class="bg-slate-100" />
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
