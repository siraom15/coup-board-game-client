<script setup >
import BaseButton from './BaseButton.vue';
import { useAttrs } from 'vue';

const attrs = useAttrs();
const props = defineProps({
  btnText: {
    type: String,
  },
  tooltipsText: {
    type: String,
  },
});
</script>

<script >
export default {};
</script>

<template>
  <div>
    <BaseButton data-tooltip-target="tooltip-default" :text="btnText" />
    <div
      id="tooltip-default"
      role="tooltip"
      class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
    >
      {{ tooltipsText }}
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>
