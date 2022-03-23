<script setup>
import SignDiv from '../components/SignDiv.vue';

const props = defineProps({
  player: {
    type: Object,
    require: true,
  },
  isCurrentTurn: {
    type: Boolean,
    require: true,
  },
});
const bgClass = {
  red: ['bg-red-600', 'border-red-700', 'text-white'],
  yellow: ['bg-yellow-300', 'border-yellow-400', 'text-red-600'],
  green: ['bg-green-400', 'border-emerald-500 ', 'text-white'],
  white: ['bg-slate-200', 'border-gray-400', 'text-red-600'],
  visible: [],
};
</script>

<template>
  <div
    class="text-center py-1 px-2 border-b-4 border-r-4"
    :class="isCurrentTurn ? bgClass.red : bgClass.white"
  >
    <span class="text-sm sm:text-sm md:text-base lg:text-xl font-bungee">1. Test </span>
    <div class="flex justify-center">
      <img
        src="/cards/back.png"
        alt=""
        srcset=""
        class="w-12 sm:w-10 md:w-12 lg:w-16 xl:w-20"
      />
      <img
        src="/cards/back.png"
        alt=""
        srcset=""
        class="w-12 sm:w-10 md:w-12 lg:w-16 xl:w-20"
      />
    </div>
    <SignDiv text="Coin : 1" />
  </div>
</template>
