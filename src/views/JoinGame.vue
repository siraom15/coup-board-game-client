<script setup >
import BaseButton from '../components/BaseButton.vue';
import TwoColorText from '../components/TwoColorText.vue'

</script>

<template>
  <div
    class="container mx-auto px-0 bg-slate-900 items-center justify-center max-w-[100%]"
  >
    <div class="flex items-center justify-center h-screen">
      <div>
        <div class="flex flex-col justify-center items-center">
          <TwoColorText
            left="JOIN"
            right=" GAME"
            class="text-2xl sm:text-4xl md:text-4xl lg:text-7xl"
          />

          <form class="mt-5">
            <input
              type="text"
              placeholder="Input Room Id"
              class="m-1 font-bungee bg-yellow-300 hover:bg-blue-light text-slate-900 w-auto h-auto border-b-4 border-yellow-400 hover:border-red-600 focus:border-red-600 placeholder-yellow-400 rounded"
              required
            />
            <BaseButton text="Join Game" />
          </form>
          <router-link to="/">
            <button
              class="mt-5 font-bungee hover:bg-blue-light text-white py-2 px-4 hover:border-blue rounded"
            >
              <div class="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                <p>Back</p>
              </div>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
