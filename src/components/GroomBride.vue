<template>
  <section class="container-section bg-slate-100 relative">
    <wave class="absolute -top-6 left-0 right-0 rotate-180" />
    <HeaderSection title="Groom & Bride" />
    <div class="w-10/12 mx-auto text-center text-sm text-slate-800" >
      <p 
        data-aos="zoom-in"
        class="text-green-500 mb-3">
        Assalmualaikum Wa Rahmatullahi Wa Baraktuh
      </p>
      <p data-aos="zoom-in">
        Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:
      </p>
    </div>
    <Profile />
    <Timelines />
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Profile from '@/components/Profile.vue'
import Timelines from '@/components/Timelines.vue'
import wave from '@/assets/svg/wave.svg'

</script>
