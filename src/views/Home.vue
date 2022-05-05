<template>
  <section>
    <Wellcome />
    <MainCover />
    <Information />
  </section>
</template>

<script setup>

import AOS from 'aos'
import { onMounted } from 'vue'
import Wellcome from '@/components/Wellcome.vue'
import MainCover from '@/components/MainCover.vue'
import Information from '@/components/Information.vue'

// Init AOS for all components
onMounted(() => {
  AOS.init()
})

</script>
