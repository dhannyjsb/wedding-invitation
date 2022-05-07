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
      @submit.prevent=""
      class="w-10/12 mx-auto mt-6">
      <div class="input-wrapper" data-aos="zoom-in">
        <label for="guestName" class="kalam-font">Nama</label>
        <input name="guestName" id="guestName" type="text" required>
      </div>
      <div class="input-wrapper" data-aos="zoom-in">
        <label for="guestStatus" class="kalam-font">Kehadiran</label>
        <select name="guestStatus" id="guestStatus" required>
          <option value="true">Hadir</option>
          <option value="false">Tidak Hadir</option>
        </select>
      </div>
      <div class="input-wrapper" data-aos="zoom-in">
        <label for="guestMessage" class="kalam-font">Pesan</label>
        <textarea name="guestMessage" id="guestMessage" cols="30" rows="5" required></textarea>
      </div>
      <button 
        data-aos="zoom-in"
        class="w-full bg-green-500 text-gray-100 mt-6 rounded-lg py-2 font-medium pointer active:scale-90 hover:border border-gray-500 hover:bg-gray-100 hover:text-green-500 duration-300" type="submit">
        <i class="fa fa-paper-plane mr-1"></i>
        Kirim pesan
      </button>
    </form>
    <!-- Frames -->
    <div class="w-full flex justify-between mt-6">
      <img class="frame" src="@/assets/frame.png" alt="frame">
      <img class="frame" src="@/assets/frame-mirror.png" alt="frame">
    </div>

  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import wave from '@/assets/svg/wave.svg'

</script>
