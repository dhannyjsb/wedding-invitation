<style scoped>
.frame {
  @apply absolute w-6/12 md:w-4/12 z-0;
}

@keyframes backOutUp-custom {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(-700px) scale(0.7);
    transform: translateY(-100%) scale(0.7);
    opacity: 0.7;
  }
}
.close-page {
  animation: backOutUp-custom .5s 1s forwards;
}

</style>

<template>
  <section :class="isOpenInvitation ? 'close-page' : ''" class="bg-texture w-full h-screen min-h-screen fixed inset-0 grid place-items-center z-50 bg-amber-200">
    <!-- Wedding couple -->
    <div class="w-6/12 text-center text-xs md:text-lg lg:text-xl">
      
      <div class="mt-5 animate__animated animate__zoomInUp">
        <h1 class="kalam-font font-semibold text-5xl lg:text-6xl my-5 text-amber-800">{{ couples.join(' & ') }}</h1>
        <p class="kalam-font text-amber-800 font-medium text-lg">We Are Getting Married</p>
        <p class="font-medium text-lg">{{ weddingDate }}</p>
       <!-- CTA -->
        <button 
          type="buton" 
          @click="openInvitation"
          class="w-10/12 md:w-8/12 text-sm md-text-lg mt-6 font-medium z-50 border border-amber-800 text-amber-500 bg-gray-50 bg-opacity-75 p-2 rounded-full pointer active:scale-90 hover:bg-amber-500 hover:text-gray-100 duration-300">
          <i class="fa-solid fa-book-open mr-1"></i>
          Buka undangan
       </button>
       <!-- CTA -->
      </div>
    </div>
    <!-- Wedding couple -->
  </section>
</template>

<script setup>

import { ref } from 'vue'
import { useState } from '@/stores/state.js'

const state = useState()

const couples = ref(['Fulan', 'Fulanah'])
const weddingDate = ref('Ahad, 27 Mei 2022')

const isOpenInvitation = ref(false)

const openInvitation = () => {
  isOpenInvitation.value = true
  state.isAudioPlay = true
}

</script>
