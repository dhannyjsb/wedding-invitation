<template>
  <section data-aos="fade-up" class="w-full px-4 mb-6 text-center">
    <decoration class="fill-amber-400 mx-auto w-3/12 mb-3"></decoration>
    <h1 class="satisfy-font text-4xl text-slate-800 font-medium mb-3">{{ props.title }}</h1>
    <p class="text-sm">{{ subtitle }}</p>
  </section>
</template>

<script setup>

import decoration from '@/assets/svg/decoration-2.svg'

const props = defineProps({
  title: {
    type: String,
    default: 'The Section'
  }, 
  subtitle: {
    type: String,
    default: 'Duis splople autem vel eum iriure Dapibus sit amet, tincidunt eu, nibh.'
  }
})

</script>
