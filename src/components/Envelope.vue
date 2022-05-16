<template>
  <section class="w-full bg-slate-100 pt-12 pb-5">
    <section class="section-container">
      <HeaderSection title="Amplop Digital" subtitle=" Doa restu anda merupakan karunia yang sangat berarti bagi kami dan jika memberi adalah ungkapan tanda terima kasih anda, anda dapat memberi kado secara cashless"></HeaderSection>
      <section class="">
        <template v-for="(wallet, x) in wallets" :key="x">
          <div data-aos="zoom-in" class="w-8/12 text-center border border-gray-200 mx-auto p-5 mb-5 bg-gray-100 shadow-lg rounded-tl-3xl rounded-br-3xl">
            <img :src="wallet.thumb" :alt="wallet.platform" class="w-5/12 mx-auto mb-3">
            <p class="text-xs">Silahkan untuk melakukan transfer melalui {{ wallet.prefix }} dibawah ini a.n. {{ wallet.name }}</p>
            <Clipboard :content="wallet.number"></Clipboard>
          </div>
        </template>
      </section>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Clipboard from '@/components/Clipboard.vue'

const wallets = [
  {
    thumb: 'wallets/mandiri.png',
    platform: 'Mandiri',
    name: 'Fulanah',
    number: '0004389203902',
    prefix: 'rekening'
  },
  {
    thumb: 'wallets/mandiri.png',
    platform: 'Mandiri',
    name: 'Fulanah',
    number: '8843439001940',
    prefix: 'rekening'
  }
]
</script>
