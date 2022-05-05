<style scoped>

.app {
  @apply w-full md:w-10/12 lg:w-8/12 xl:w-6/12 md:mx-auto;
}

</style>>

<template>
  <main class="app">
    <router-view></router-view>
    <!-- Backsound auto play -->
    <Audio />
  </main> 
</template> 
 
<script setup>

import AOS from 'aos'
import { onMounted } from 'vue'
import Audio from '@/components/Audio.vue'

onMounted(() => {
  AOS.init({
    duration: 600,
    offset: 160
  })
})

</script>
