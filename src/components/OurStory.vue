<template>
  <section class="w-full">
    <section class="container-section">
      <HeaderSection title="Kisah Cinta Kami" />
      <div class="mt-6">
        <template v-for="(story, x) in stories" :key="x">
          <div 
            data-aos="zoom-in"
            class="w-10/12 mx-auto mb-4">
            <p class="satisfy-font text-3xl text-amber-500 text-xl">{{ story.title }}</p>
            <p class="font-medium mb-0">{{ story.place }}</p>
            <p>{{ story.description }}</p>
          </div>
        </template>
      </div>
    </section>
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import wave from '@/assets/svg/wave.svg'

const stories = ref(null)
onMounted(() => {
  axios.get('contents/story.json')
    .then( res => stories.value = res.data.stories )
    .catch( err => alert(err) )
})

</script>
