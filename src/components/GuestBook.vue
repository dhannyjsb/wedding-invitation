<style scoped>

.frame {
  @apply w-4/12 rotate-180;
}

.input-wrapper {
  @apply w-full flex flex-wrap gap-1 mb-3;
}

label {
  @apply w-full text-amber-500 text-xl;
}

input, textarea, select, option {
  @apply w-full px-2 py-3 rounded-lg bg-amber-400 border border-amber-800 duration-300 focus:border-green-500 text-gray-700 placeholder:text-gray-500;
}

</style>

<template>
  <section class="w-full relative bg-slate-100 pb-0">
    <section class="container-section bg-gradient-to-b from-amber-200 to-gray-50">
      <HeaderSection title="Guest Book" />
      <!-- Form -->
      <form 
        ref="form"
        @submit="sendMessage"
        class="w-10/12 mx-auto mt-6">
        <!-- Alert -->
        <Alert :statusResponse="statusResponse" :showAlert="showAlert" v-on:close="showAlert = false" />
        <!-- Guest Name -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label for="GuestName" class="kalam-font">Nama</label>
          <input v-model="GuestName" placeholder="Nama lengkap anda" name="GuestName" id="GuestName" type="text" required>
        </div>
        <!-- Guest Status -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label for="GuestStatus" class="kalam-font">Kehadiran</label>
          <select v-model="GuestStatus" name="GuestStatus" id="GuestStatus" required>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>
        </div>
        <!-- Guest Message -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label for="GuestMessage" class="kalam-font">Pesan</label>
          <textarea placeholder="Tuliskan pesan anda disini" v-model="GuestMessage" name="GuestMessage" id="GuestMessage" cols="30" rows="5" required></textarea>
        </div>
        <!-- Submit -->
        <button 
          data-aos="zoom-in"
          class="w-full bg-amber-500 text-gray-100 mt-6 rounded-lg py-2 font-medium pointer active:scale-90 hover:border border-gray-500 hover:bg-gray-100 hover:text-green-500 duration-300" type="submit">
          <i class="fa fa-paper-plane mr-1"></i>
          Kirim pesan
        </button>
      </form>
      <!-- Gift Section -->
      <Gift></Gift>
      <!-- Message Box -->
      <!--MessagesBox :messages="messages" -->
      <!-- Frames -->
      <div class="w-full items-center flex justify-between mt-6">
        <img class="w-2/12" src="@/assets/leaf-frame.png" alt="frame">
        <p class="text-sm">Diundang &copy; 2022</p>
        <img class="w-2/12" src="@/assets/leaf-frame-mirror.png" alt="frame">
      </div>
    </section>
  </section>
</template>

<script setup>

import { computed, reactive, ref } from 'vue'
import axios from 'axios'
import HeaderSection from '@/components/HeaderSection.vue'
import Alert from '@/components/Alert.vue'
import Gift from '@/components/Gift.vue'
//import MessagesBox from '@/components/MessagesBox.vue'
import wave from '@/assets/svg/wave.svg'

// Form handler
const form = ref(null)
const GuestName = ref(null)
const GuestMessage= ref(null)
const GuestStatus = ref('Hadir')

// Alert handler
const statusResponse = ref(false)
const showAlert = ref(false)

//URL
const scriptURL = "https://script.google.com/macros/s/AKfycbzPgWJ7760OwwRlvjhrBMSM9HTVJL2wjDnDB3Up9ZOEIm09LMBwpmSpkQ6eGjAPGPCH/exec"
const sendMessage = ( evt ) => {
  evt.preventDefault()
  
  setTimeout( () => {
    // Post form
    fetch(scriptURL, { method: 'POST', body: new FormData(form.value)})
      .then( res => {
        console.log('Success: ', res)
        statusResponse.value = true
        showAlert.value = true
       })
      .catch( err => {
        console.log('Error: ', err)
        statusResponse.value = false
        showAlert.value = true
      })
  }, 500)
}
</script>
