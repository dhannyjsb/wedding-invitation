<template>
  <section class="w-full bg-slate-100">
    <wave class="rotate-180" />
    <section class="container-section">
      <HeaderSection title="Our Gallery" />
      <viewer :images="galleries" class="flex flex-wrap gap-3 justify-center">
      <img v-for="src in galleries" data-aos="zoom-in"
        :src="src" :key="src" class="w-5/12 rounded-lg">
      </viewer>
      <!-- Our Video -->
      <OurVideo class="mt-16" />
    </section>
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import OurVideo from '@/components/OurVideo.vue'
import wave from '@/assets/svg/wave.svg'

const galleries = ref(null)
onMounted(() => {
  axios.get('contents/galleries.json')
    .then( res => galleries.value = res.data.galleries )
    .catch( err => alert(err) )
})

</script>
