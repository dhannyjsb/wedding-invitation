<template>
  <button 
    @click="clipboard"
    class="active:scale-95 duration-300 bg-green-700 text-sm text-gray-50 py-2 px-4 rounded-lg inline-block mt-3">
    {{ textContent }}
    <i :class="textContent === 'Copied!' ? 'fa-check' : 'fa-copy'" class="fa-solid ml-2"></i>
  </button>
</template>

<script setup>

import { ref } from 'vue'

const textContent = ref( props.content )

const props = defineProps({
  content: {
    type: String,
    default: 'Example'
  }
})

const clipboard = () => {
  navigator.clipboard.writeText(props.content)
    .then( res => textContent.value = 'Copied!' )
    .catch( err => console.log(err) )
}

</script>
