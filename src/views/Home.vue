<template>
  <section>
    <Wellcome></Wellcome>
    <MainCover v-if="isAudioPlay" id="mainCover"></MainCover>
    <Information v-if="isAudioPlay"></Information>
    <GroomBride v-if="isAudioPlay" id="groomAndBride"></GroomBride>
    <GoToOurWedding v-if="isAudioPlay" id="goToOurWedding"></GoToOurWedding>
    <OurGallery v-if="isAudioPlay" id="ourGallery"></OurGallery>
    <OurStory v-if="isAudioPlay"></OurStory>
    <GuestBook v-if="isAudioPlay" id="guestBook"></GuestBook>
  </section>
  <Navigation v-if="isAudioPlay" v-on:navChange="navigationHandler"></Navigation>
</template>

<script setup>
import { useState } from '@/stores/state.js'
import { computed } from 'vue'
import Wellcome from '@/components/Wellcome.vue'
import MainCover from '@/components/MainCover.vue'
import Information from '@/components/Information.vue'
import GroomBride from '@/components/GroomBride.vue'
import GoToOurWedding from '@/components/GoToOurWedding.vue'
import OurGallery from '@/components/OurGallery.vue'
import OurStory from '@/components/OurStory.vue'
import GuestBook from '@/components/GuestBook.vue'
import Navigation from '@/components/Navigation.vue'

const state = useState()
const isAudioPlay = computed(() => state.isAudioPlay)

// Navigation handler
const navigationHandler = id => {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  })
}

</script>
