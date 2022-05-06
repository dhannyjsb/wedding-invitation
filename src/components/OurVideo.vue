<template>
  <section class="container-section bg-slate-100">
    <HeaderSection title="Our Video" /> 
    <VueVideoPlayer data-aos="zoom-in" class="w-10/12 mx-auto" src="https://dl.dropbox.com/s/ad8kglphakmuacv/happy_eid_mubarak_atiya.mp4?dl=2" />
  </section>
</template>

<script setup>

import VueVideoPlayer from 'vue3-player-video'
import HeaderSection from '@/components/HeaderSection.vue'

</script>
