<template>
  <section>
    <Wellcome></Wellcome>
    <MainCover v-if="isAudioPlay"></MainCover>
    <GroomBride v-if="isAudioPlay"></GroomBride>
    <OurStory v-if="isAudioPlay"></OurStory>
    <GuestBook v-if="isAudioPlay"></GuestBook>
  </section>
</template>

<script setup>

import { useState } from '@/stores/state.js'
import { computed } from 'vue'
import Wellcome from '@/components/Wellcome.vue'
import MainCover from '@/components/MainCover.vue'
import GroomBride from '@/components/GroomBride.vue'
import OurStory from '@/components/OurStory.vue'
import GuestBook from '@/components/GuestBook.vue'

const state = useState()
const isAudioPlay = computed(() => state.isAudioPlay )

</script>
