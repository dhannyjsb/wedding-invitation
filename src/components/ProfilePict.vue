<template>
  <section 
    class="w-full mb-6">
    <img data-aos="zoom-in" class="w-9/12 shadow-lg border border-gray-200 mx-auto rounded-tr-3xl rounded-bl-3xl" :src="source.thumb" :alt="source.thumb">
    <div data-aos="slide-up" class="mt-10 w-full text-center text-slate-800 text-sm">
      <p class="text-gray-50 text-[2rem] font-semibold tangerine-font">{{ source.name }}</p>
      <p class="text-gray-100 mb-3 mt-1 font-semibold">Anak dari pasangan Bapak {{ source.parents[0] }} dengan Ibu {{ source.parents[1] }}</p>
      <p class="text-gray-100">{{ source.address }}</p>
      <div class="flex gap-3 justify-center mt-3">
        <template v-for="(item, x) in source.sosmed" :key="x">
          <a target="_blank" class="text-amber-500" :href="item.link"><i :class="item.icon" class="text-xl"></i></a>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  source: {
    type: Object,
    default: { name: 'fulan' }
  }
})

</script>
