<template>
  <section class="container-section bg-slate-100">
    <HeaderSection title="Our Video" /> 
    <VueVideoPlayer data-aos="zoom-in" class="w-10/12 mx-auto" :src="source" />
  </section>
</template>

<script setup>

import VueVideoPlayer from 'vue3-player-video'
import HeaderSection from '@/components/HeaderSection.vue'

const source = 'https://dl.dropbox.com/s/ggu2nnvsddf45he/Tretan%20Muslim%20_%20Luna%20Prewedding%20Video%20%28%20720%20X%201280%20%29.mp4?dl=2'

</script>
