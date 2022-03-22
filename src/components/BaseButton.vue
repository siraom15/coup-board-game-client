<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
const props = defineProps({
  text: {
    type: String,
    default: 'Button',
  },
  color: {
    type: String,
    default: 'red',
  },
});
const btnClass = {
  red: [
    'bg-red-600',
    'border-red-700',
    'hover:bg-red-800',
    'hover:border-red-900',
  ],
  yellow: [
    'bg-yellow-300',
    'border-yellow-400',
    'hover:bg-yellow-500',
    'hover:border-yellow-600',
  ],
  green: [
    'bg-green-400',
    'border-emerald-500 ',
    'hover:bg-green-500',
    'hover:border-emerald-600',
  ],
};
</script>



<template>
  <button
    class="font-bungee text-white text-xs sm:text-xs md:text-xs lg:text-base py-2 px-4 border-b-4 rounded"
    :class="[btnClass[props.color]]"
    v-bind="attrs"
  >
    {{ props.text }}
  </button>
</template>
