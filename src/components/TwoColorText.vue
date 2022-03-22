<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
const props = defineProps({
  left: {
    type: String,
  },
  right: {
    type: String,
  },
});
</script>


<template>
  <div class="text-2xl font-bungee" v-bind="attrs">
    <span class="text-yellow-300"> {{ left }} </span>
    <span class="text-red-600"> {{ right }} </span>
  </div>
</template>
