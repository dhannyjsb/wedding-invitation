<template>
  <section class="w-full">
    <waveBlock class="rotate-180 bg-gray-50" />
    <section class="container-section bg-gradient-to-b from-gray-50 to-amber-200 ">
      <HeaderSection title="Our Love Story" />
      <div class="mt-6">
        <template v-for="(story, x) in stories" :key="x">
          <div 
            data-aos="zoom-in"
            class="mx-auto mb-4 px-8">
            <p class="kalam-font text-amber-500 text-xl">{{ story.title }}</p>
            <p class="font-medium mb-0">{{ story.place }}</p>
            <p class="text-lg">{{ story.description }}</p>
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
import waveBlock from '@/assets/svg/wave-block.svg'

const stories = ref(null)
onMounted(() => {
  axios.get('contents/story.json')
    .then( res => stories.value = res.data.stories )
    .catch( err => alert(err) )
})

</script>
