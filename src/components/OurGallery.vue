<template>
  <section class="w-full bg-slate-100">
    <section class="w-full px-0">
      <viewer :images="galleries">
        <div class="flex flex-wrap">
          <template
            v-for="src in galleries" :key="src" data-aos="zoom-in">
            <div data-aos="fade-up" class="w-4/12">
              <img :src="src" class="w-full" :alt="src" />
            </div>
          </template>
        </div>
      </viewer>
      <!-- Our Story -->
      <OurStory class="mt-10"></OurStory>
      <!-- Our Video -->
      <OurVideo class="mt-10"></OurVideo>
    </section>
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import OurVideo from '@/components/OurVideo.vue'
import OurStory from '@/components/OurStory.vue'
import wave from '@/assets/svg/wave.svg'

const galleries = ref(null)
onMounted(() => {
  axios.get('contents/galleries.json')
    .then( res => galleries.value = res.data.galleries )
    .catch( err => alert(err) )
})

</script>
