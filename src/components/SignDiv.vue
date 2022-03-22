<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
const props = defineProps({
  text: {
    type: String,
    default: 'Some Text',
  },
});
</script>



<template>
  <div
    class="font-bungee text-center text-red-600 bg-yellow-300 py-2 px-4 border-b-4 border-r-4 border-yellow-400 text-xs sm:text-xs md:text-base lg:text-lg"
    v-bind="attrs"
  >
    <span>{{ props.text }}</span>
  </div>
</template>
