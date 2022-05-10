<style scoped>

@keyframes hide {
  from {
    opacity: 1;
  } to {
    opacity: 0;
  }
}

.hide-section {
  animation: hide 2s .35s forwards;
}

</style>

<template>
  <section>
    <Wellcome v-if="showWellcome" />
    <MainCover />
    <Information />
    <GroomBride />
    <GoToOurWedding />
    <OurGallery />
    <OurStory />
    <GuestBook />
  </section>
</template>

<script setup>

import { useState } from '@/stores/state.js'
import { computed, watch, ref } from 'vue'
import Wellcome from '@/components/Wellcome.vue'
import MainCover from '@/components/MainCover.vue'
import Information from '@/components/Information.vue'
import GroomBride from '@/components/GroomBride.vue'
import GoToOurWedding from '@/components/GoToOurWedding.vue'
import OurGallery from '@/components/OurGallery.vue'
import OurStory from '@/components/OurStory.vue'
import GuestBook from '@/components/GuestBook.vue'

const state = useState()
const isAudioPlayed = computed(() => state.isAudioPlay)
const showWellcome = ref(true)

</script>
