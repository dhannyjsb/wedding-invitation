<style scoped>

.button {
  @apply bg-orange-600 text-gray-100 px-2 py-2 w-full rounded text-center;
}

</style>

<template>
  <section class="w-10/12 mx-auto mt-16 flex flex-wrap flex-row gap-12">
    <template v-for="(timeline, x) in timelines" :key="x">
      <div 
        data-aos="zoom-in"
        data-aos-delay="600"
        class="text-center text-sm text-slate-800 mb-4">
        <h2 class="mb-3 kalam-font text-2xl text-green-500">{{ timeline.title }}</h2>
        <p>{{ timeline.date }}</p>
        <p>{{ timeline.time }}</p>
        <p class="font-bold my-2">{{ timeline.location }}</p>
        <p>{{ timeline.address }}</p>
      </div>
    </template>
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'

const timelines = ref(null)
onMounted(() => {
  axios.get('contents/timelines.json')
    .then( res => timelines.value = res.data.timelines )
    .catch( err => alert(err) )
})

</script>
