<template>
  <section class="w-10/12 text-center mx-auto mb-10 pt-6" >
    <i data-aos="zoom-in" class="fa-solid fa-cannabis text-lg text-amber-700"></i>
    <h1 data-aos="zoom-in" class="rancho-font text-4xl text-amber-700 font-medium text-center">{{ props.title }}</h1>
  </section>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'The Section'
  }
})

</script>
