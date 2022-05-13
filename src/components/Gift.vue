<template>
  <section class="w-11/12 mx-auto mt-16 text-center">
    <h1 data-aos="zoom-in"
      class="kalam-font text-amber-500 text-2xl">Gift For Us</h1>
    <p data-aos="zoom-in" class="text-xs mt-4">
      Doa restu anda merupakan karunia yang sangat berarti bagi kami dan jika memberi adalah ungkapan tanda terima kasih anda, anda dapat memberi kado secara cashless
    </p>
    <section class="mt-10">
      <template v-for="(wallet, x) in wallets" :key="x">
        <div data-aos="zoom-in" class="w-10/12 mx-auto mb-4 p-5 bg-gray-100 shadow-lg rounded-xl">
          <img :src="wallet.thumb" :alt="wallet.platform" class="w-5/12 mx-auto mb-3">
          <p class="text-xs">Silahkan untuk melakukan transfer melalui {{ wallet.prefix }} dibawah ini a.n. {{ wallet.name }}</p>
          <Clipboard :content="wallet.number"></Clipboard>
        </div>
      </template>
    </section>
  </section>
</template>

<script setup>

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
