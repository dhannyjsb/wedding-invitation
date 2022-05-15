<template>
  <section>
    <MainCover id="mainCover"></MainCover>
    <Information></Information>
    <GroomBride id="groomAndBride"></GroomBride>
    <GoToOurWedding id="goToOurWedding"></GoToOurWedding>
    <OurGallery id="ourGallery"></OurGallery>
    <OurStory></OurStory>
    <GuestBook id="guestBook"></GuestBook>
  </section>
</template>

<script setup>

import MainCover from '@/components/MainCover.vue'
import Information from '@/components/Information.vue'
import GroomBride from '@/components/GroomBride.vue'
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
