<template>
  <section class="container-section text-sm text-center">
    <HeaderSection title="Information" />
    <p
      data-aos="zoom-in"
      class="text-green-500 text-lg mb-2 font-medium">Protokol Kesehatan</p>
    <p 
      data-aos="zoom-in"
      class="text-slate-800">
      Mari bersama mengikuti protokol kesehatan yang diberlakukan oleh Pemerintah RI
      dalam upaya pencegahan terjadinya penularan virus Covid 19
    </p>
    <!-- Protocols -->
    <div
      data-aos="zoom-in"
      class="mt-10 flex flex-wrap gap-3 justify-center">
      <template v-for="(protocol, x) in protocols" :key="x">
        <div class="w-5/12 text-center">
          <img :src="protocol.thumb" :alt="protocol.thumb" class="w-8/12 mb-2 rounded-full mx-auto">
          <small>{{ protocol.title }}</small>
        </div>
      </template>
    </div>
    <!-- Protocols -->
    <!-- Quote -->
    <div
      data-aos="zoom-in"
      class="text-center mt-24 w-10/12 mx-auto">
      <i class="fa-solid fa-quote-left"></i>
      <i class="font-medium text-sm inline-block mb-4">
        "Tidak ada solusi yang lebih baik bagi dua insan yang saling mencintai di banding pernikahan."
      </i>
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
