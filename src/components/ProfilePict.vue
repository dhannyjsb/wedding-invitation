<template>
  <section 
    class="w-10/12 mx-auto">
    <div data-aos="slide-up" class="mt-4 w-full text-center text-slate-800 text-sm">
      <p class="text-amber-700 text-3xl font-semibold kalam-font">{{ source.name }}</p>
      <p class="mb-3 mt-1 font-semibold">Anak dari pasangan Bapak {{ source.parents[0] }} dengan Ibu {{ source.parents[1] }}</p>
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
