<template>
  <section class="w-full bg-gradient-to-b from-gray-800 to-gray-700">
    <wave class="fill-white" />
    <section class="container-section">
      <HeaderSection text-color="text-gray-100" title="Mempelai Pria dan Wanita" subtitle="Ya Allah dengan mengharap ridha dan karunia-Mu, Izinkanlah kami mempersatukan dua insan dari dua keluarga ini agar menjadi pasangan yang selalu mendapakan rahmat-Mu" />
      <Profile></Profile>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Profile from '@/components/Profile.vue'
import Timelines from '@/components/Timelines.vue'
import wave from '@/assets/svg/wave.svg'

</script>
