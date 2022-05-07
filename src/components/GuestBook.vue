<style scoped>

.frame {
  @apply w-4/12 rotate-180;
}

.input-wrapper {
  @apply w-full flex flex-wrap gap-1 mb-3;
}

label {
  @apply w-full text-green-500 text-xl;
}

input, textarea, select, option {
  @apply w-full px-2 py-3 rounded-lg bg-white duration-300 focus:border-green-500 text-gray-700;
}

</style>

<template>
  <section class="container-section relative bg-slate-100 pb-0">
    <wave class="bg-slate-100 rotate-180"/>
    <HeaderSection title="Guest Book" />
    <!-- Form -->
    <form 
      ref="formEl"
      @submit="sendMessage"
      class="w-10/12 mx-auto mt-6">
      <!-- Alert -->
      <Alert :statusResponse="statusResponse" :showAlert="showAlert" v-on:close="showAlert = false" />
      <!-- Guest Name -->
      <div class="input-wrapper" data-aos="zoom-in">
        <label for="guestName" class="kalam-font">Nama</label>
        <input v-model="form.guestName" name="guestName" id="guestName" type="text" required>
      </div>
      <!-- Guest Status -->
      <div class="input-wrapper" data-aos="zoom-in">
        <label for="guestStatus" class="kalam-font">Kehadiran</label>
        <select v-model="form.guestStatus" name="guestStatus" id="guestStatus" required>
          <option value="true">Hadir</option>
          <option value="false">Tidak Hadir</option>
        </select>
      </div>
      <!-- Guest Message -->
      <div class="input-wrapper" data-aos="zoom-in">
        <label for="guestMessage" class="kalam-font">Pesan</label>
        <textarea v-model="form.guestMessage" name="guestMessage" id="guestMessage" cols="30" rows="5" required></textarea>
      </div>
      <!-- Submit -->
      <button 
        data-aos="zoom-in"
        class="w-full bg-green-500 text-gray-100 mt-6 rounded-lg py-2 font-medium pointer active:scale-90 hover:border border-gray-500 hover:bg-gray-100 hover:text-green-500 duration-300" type="submit">
        <i class="fa fa-paper-plane mr-1"></i>
        Kirim pesan
      </button>
    </form>
    <!-- Message Box -->
    <!-- Frames -->
    <div class="w-full flex justify-between mt-6">
      <img class="frame" src="@/assets/frame.png" alt="frame">
      <img class="frame" src="@/assets/frame-mirror.png" alt="frame">
    </div>

  </section>
</template>

<script setup>

import { computed, reactive, ref } from 'vue'
import { useState } from '@/stores/state.js'
import HeaderSection from '@/components/HeaderSection.vue'
import Alert from '@/components/Alert.vue'
import wave from '@/assets/svg/wave.svg'

const state = useState()
const messages = computed(() => state.messages)

// Form handler
const formEl = ref(null)

const form = reactive({
  guestName: '',
  guestStatus: true,
  guestMessage: ''
})

// Alert handler
const statusResponse = ref(false)
const showAlert = ref(false)

const sendMessage = ( evt ) => {
  evt.preventDefault()
  
  form.timestamp = new Date().toLocaleString()
  try {
    setTimeout(() => {
      state.messages.unshift( form )
      statusResponse.value = true
      showAlert.value = true
    }, 500)
  } catch(err) {
      statusResponse.value = false
      showAlert.value = true
  }
}
</script>
