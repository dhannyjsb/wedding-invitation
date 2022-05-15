<style scoped>

.app {
  @apply w-full xl:w-6/12 md:mx-auto;
}

</style>>

<template>
  <main class="app">
    <router-view></router-view>
    <!-- Mini Button -->
    <MiniButton></MiniButton>
  </main> 
</template> 
 
<script setup>

import AOS from 'aos'
import { onMounted } from 'vue'
import MiniButton from '@/components/MiniButton.vue'

onMounted(() => {
  AOS.init({
    delay: '200'
  })
})

</script>
