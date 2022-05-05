<template>
  <section 
    data-aos="slide-up"
    class="w-full">
    <img class="w-8/12 mx-auto rounded-full border-4 border-slate-200 ring-2 ring-green-600" :src="source.thumb" :alt="source.thumb">
    <div class="mt-4 w-full text-center text-slate-800 text-sm">
      <p class="text-green-500 font-semibold kalam-font text-xl">{{ source.name }}</p>
      <p class="mb-3 mt-1">Anak dari pasangan Bapak {{ source.parents[0] }} dengan Ibu {{ source.parents[1] }}</p>
      <small>{{ source.address }}</small>
      <div class="flex gap-3 justify-center mt-3">
        <template v-for="(item, x) in source.sosmed" :key="x">
          <a target="_blank" :href="item.link"><i :class="item.icon" class="text-xl"></i></a>
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
