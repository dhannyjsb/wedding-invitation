<template>
  <section class="w-full mb-6">
    <div class="w-full flex gap-2 justify-center tems-center my-2">
      <i class="fa-solid fa-bahai text-sm"></i>
      <i class="fa-solid fa-bahai"></i>
      <i class="fa-solid fa-bahai text-sm"></i>
    </div>
    <h1 data-aos="zoom-in" class="kalam-font text-4xl text-slate-700 font-medium text-center">{{ props.title }}</h1>
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
