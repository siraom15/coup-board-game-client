<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
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
const bgStyle = {
  white: ['bg-slate-200', 'border-gray-400'],
  yellow: ['bg-yellow-300', 'border-yellow-400'],
};
</script>



<template>
  <div
    class="text-center py-2 px-4 border-b-4 border-r-4"
    :class="isCurrentTurn ? bgStyle.yellow : bgStyle.white"
    v-bind="attrs"
  >
    <span class="text-base font-bungee">
      <span class="text-red-600 m-1">
        <span>Test</span>
      </span>
    </span>
    <div class="flex justify-center">
      <img src="/cards/back.png" alt="" srcset="" class="w-28" />
      <img src="/cards/back.png" alt="" srcset="" class="w-28" />
    </div>
  </div>
</template>
