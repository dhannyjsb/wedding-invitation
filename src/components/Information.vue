<template>
  <section class="container-section">
    <HeaderSection title="Information" />
    <p 
      data-aos="zoom-in"
      class="text-center text-slate-800 text-sm">
      Mari bersama mengikuti protokol kesehatan yang diberlakukan oleh Pemerintah RI
      dalam upaya pencegahan terjadinya penularan virus Covid 19
    </p>
    <!-- Protocols -->
    <div
      data-aos="zoom-in"
      class="mt-10 flex flex-wrap gap-3 justify-center">
      <template v-for="(protocol, x) in protocols" :key="x">
        <div class="w-5/12 text-sm text-center">
          <img :src="protocol.thumb" :alt="protocol.thumb" class="w-8/12 mb-2 rounded-full mx-auto">
          <p>{{ protocol.title }}</p>
        </div>
      </template>
    </div>
    <!-- Protocols -->
    <!-- Hadist -->
    <div
      data-aos="zoom-in"
      class="text-center mt-16 w-10/12 mx-auto">
      <p class="font-medium text-sm mb-2">
        "Tidak ada solusi yang lebih baik bagi dua insan yang saling mencintai di banding pernikahan."
      </p>
      <h1 class="kalam-font text-xl text-green-600">HR. Ibnu Majah</h1>
    </div>
  </section>
</template>

<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'

const protocols = ref(null)

onMounted(() => {
  axios.get('contents/protocols.json')
    .then(res => protocols.value = res.data.protocols )
    .catch(err => alert(err))
})

</script>
