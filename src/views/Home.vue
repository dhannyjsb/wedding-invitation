<template>
  <section>
    <MainCover id="mainCover"></MainCover>
    <FirstSight></FirstSight>
    <GroomBride></GroomBride>
    <Timelines></Timelines>
    <OurGallery></OurGallery>
  </section>
</template>

<script setup>

import MainCover from '@/components/MainCover.vue'
import FirstSight from '@/components/FirstSight.vue'
import GroomBride from '@/components/GroomBride.vue'
import Timelines from '@/components/Timelines.vue'
import GoToOurWedding from '@/components/GoToOurWedding.vue'
import OurGallery from '@/components/OurGallery.vue'
import OurStory from '@/components/OurStory.vue'
import GuestBook from '@/components/GuestBook.vue'
import Navigation from '@/components/Navigation.vue'

// Navigation handler
const navigationHandler = id => {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  })
}

</script>
