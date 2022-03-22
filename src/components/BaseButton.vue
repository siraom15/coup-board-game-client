<script setup>
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
    'disabled:bg-red-400',
    'disabled:border-red-500',
  ],
  yellow: [
    'bg-yellow-300',
    'border-yellow-400',
    'hover:bg-yellow-400',
    'hover:border-yellow-500',
    'disabled:bg-yellow-200',
    'disabled:border-yellow-300',
  ],
  green: [
    'bg-green-400',
    'border-emerald-500 ',
    'hover:bg-green-500',
    'hover:border-emerald-600',
    'disabled:bg-green-300',
    'disabled:border-emerald-400',
  ],
  visible: [],
};
</script>

<template>
  <button
    class="font-bungee text-white text-xs sm:text-xs md:text-xs lg:text-base py-2 px-4 border-b-4 border-r-4 rounded shadow-slate-600 shadow-sm"
    :class="[btnClass[props.color]]"
  >
    {{ props.text }}
  </button>
</template>
