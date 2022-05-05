<template>
  <section class="w-10/12 mx-auto flex flex-wrap justify-center items-center gap-5 mt-6">
    <template v-for="(couple, x) in couples" :key="x">
      <ProfilePict :source="couple" />
    </template>
  </section>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import ProfilePict from '@/components/ProfilePict.vue'

const couples = ref(null)
onMounted(() => {
  axios.get('contents/couples.json')
    .then( res => couples.value = res.data.couples )
    .catch( err => alert(err) )
})

</script>
