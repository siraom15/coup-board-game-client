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
  red: [
    'bg-red-600',
    'border-red-700',
    'text-white',
  ],
  yellow: [
    'bg-yellow-300',
    'border-yellow-400',
    'text-red-600',
  ],
  green: [
    'bg-green-400',
    'border-emerald-500 ',
    'text-white',
  ],
  white: ['bg-slate-200', 'border-gray-400','text-red-600'],
  visible: [],
};
</script>

<template>
  <div
    class="text-center py-2 px-4 border-b-4 border-r-4"
    :class="isCurrentTurn ? bgClass.green : bgClass.white"
  >
    <span class="text-lg font-bungee">
      <span class="">
        <span>Test</span>
      </span>
    </span>
    <div class="flex justify-center">
      <img
        src="/cards/back.png"
        alt=""
        srcset=""
        class="w-12 sm:w-12 md:w-16 lg:w-20 xl:w-24"
      />
      <img
        src="/cards/back.png"
        alt=""
        srcset=""
        class="w-12 sm:w-12 md:w-16 lg:w-20 xl:w-24"
      />
    </div>
    <SignDiv text="Current Coin : 1" />
  </div>
</template>
