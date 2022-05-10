<template>
  <audio ref="audioEl" autoplay>
    <source src="@/assets/audio/backsound.mp3" type="audio/mp3">
  </audio>
  <button style="height: 40px; width: 40px" class="bg-gray-100 rounded-full fixed bottom-20 text-lg grid place-items-center left-3 text-slate-600 z-50 border border-gray-600" @click="control">
    <i v-if="!isPlayed" class="fa-solid fa-volume-off"></i>
    <i v-else class="fa-solid fa-volume-high"></i>
  </button>
</template>

<script setup>

import { ref, computed, watch } from 'vue'
import { useState } from '@/stores/state.js'

const state = useState()

const audioEl = ref(null)
const isPlayed = ref(false)

const isAudioPlay = computed(() => state.isAudioPlay)

const audioClick = () => isPlayed.value = !isPlayed.value
const audioAction = () => isPlayed.value ? audioEl.value.play() : audioEl.value.pause()

const control = () => {
  audioClick()
  audioAction()
}

watch(isAudioPlay, control)

</script>
