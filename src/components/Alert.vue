<template>
  <!-- Alert -->
  <section v-if="showAlert" class="flex gap-2 mb-6">
    <div 
      :class="statusResponse ? 'bg-green-500' : 'bg-red-500'" 
      class="w-10/12 text-gray-100 p-2 text-center rounded-lg duration-300" >
      {{ statusResponse ? 'Pesan berhasil terkirim' : 'Pesan gagal dikirimkan' }}
    </div>
    <button 
      @click="emits('close')" class="px-1 w-2/12 grid place-items-center border border-gray-600 rounded-lg">
      <i class="fa fa-times"></i>
    </button>
  </section>
</template>

<script setup>

const emits = defineEmits(['close'])

const props = defineProps({
  statusResponse: {
    type: Boolean,
    default: false
  },
  showAlert: {
    type: Boolean,
    default: false
  }
})

</script>
