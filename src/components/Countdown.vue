<template>
  <div class="px-2 py-4">
    <p class="mx-auto text-center text-sm text-gray-100 w-10/12 mb-2">Menuju acara resepsi kami</p>
    <section class="flex justify-center gap-3 ">
      <template v-for="(value, name, index) in countdown" :key="index">
        <div 
          data-aos="zoom-in"
          class="text-center w-3/12">
          <p class="text-3xl font-medium text-amber-500 mb-2">{{ value }}</p>
          <p class="text-gray-100 text-sm font-medium">{{ name }}</p>
        </div>
      </template>
    </section>
  </div>
</template>

<script setup>

import { ref } from 'vue'

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
