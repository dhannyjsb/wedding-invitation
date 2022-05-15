<template>
  <section data-aos="zoom-in" :class="props.bgColor" class="w-9/12 mx-auto rounded-tl-[2rem] rounded-br-[2rem] shadow-xl overflow-hidden border border-gray-200">
    <div data-aos="fade-up"><slot name="body"></slot></div>
    <div data-aos="fade-up"><slot name="footer"></slot></div>
  </section>
</template>

<script setup>

const props = defineProps({ 
  bgColor: {
    type: String,
    default: 'bg-gray-50'
  }
})

</script>>
