<script setup >
import SignDiv from '../components/SignDiv.vue';

import { ref } from '@vue/reactivity';


const players = ref(['1,2,3']);
</script>

<script >
export default {};
</script>

<template>
  <div class="max-w-2xl mx-auto text-xs sm:text-xs md:text-base lg:text-lg" >
    <div
      class="p-10 max-w-md font-bungee bg-yellow-300 hover:bg-blue-light py-2 px-4 border-b-4 border-yellow-400"
    >
      <div class="flex justify-between items-center mb-4">
        <h3 class="leading-none text-gray-900">Player In Lobby</h3>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-yellow-400">
          <li class="py-3" v-for="k in [1, 2, 3]" :key="k">
            <div class="flex items-center space-x-4">
              <div class="flex-1 min-w-0">
                <p class="font-medium text-gray-900 truncate text-center">
                  Player {{k}}
                </p>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
