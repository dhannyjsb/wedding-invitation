<template>
  <section class="w-full relative flex flex-col justify-center gap-3 bg-gradient-to-b from-gray-50 to-amber-200 h-screen">
    <div class="w-8/12 mx-auto text-center text-gray-100 relative">
      <img src="@/assets/leaf-frame-mirror.png" class="w-3/12 absolute -right-3 -top-5">
      <h1 class="kalam-font text-5xl lg:text-6xl my-6 font-bold text-amber-800">Fulan & Fulanah</h1>
      <p class="text-amber-600 font-medium">Hitung mundur pernikahan kami</p>
      <Countdown></Countdown>
      <img src="@/assets/leaf-frame.png" class="w-3/12 absolute -left-3 -top-5">
      <br>
    </div>
    <waveBlock class="absolute -bottom-1 left-0 right-0"/>
  </section>
</template>

<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router' 
import Countdown from '@/components/Countdown.vue'
import waveBlock from '@/assets/svg/wave-block.svg'

const route = useRoute()
let query = computed(() => route.query)

if (route.query.to === undefined) query = { to: 'Saudara/i' } 

</script>
