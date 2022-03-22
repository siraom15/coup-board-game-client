<script setup>
import BaseButton from '../components/BaseButton.vue';
</script>

<template>
  <form
    class="flex flex-col justify-center sm:flex-col md:flex-row lg:flex-row gap-2"
  >
    <input
      type="text"
      placeholder="Input Room Id"
      class="font-bungee bg-yellow-300 hover:bg-blue-light text-slate-900 w-auto h-auto border-b-4 border-yellow-400 hover:border-red-600 focus:border-red-600 placeholder-yellow-400 rounded"
      required
    />
    <BaseButton text="Join Game" />
  </form>
</template>
