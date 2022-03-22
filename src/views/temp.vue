<script setup >
import BaseButton from '../components/BaseButton.vue';
import PlayerLobby from '../components/PlayerLobby.vue';
</script>

<template>
  <div
    class="container mx-auto px-0 bg-slate-900 items-center justify-center max-w-[100%]"
  >
    <div class="h-screen">
      <div class="text-7xl font-bungee text-center">
        <span class="text-yellow-300 m-1">
          <span>COUP</span>
        </span>
        <span class="text-red-600 m-1">
          <span>GAME</span>
        </span>
      </div>
      <div class="flex-col items-center">
        <div class="text-4xl mt-5 font-bungee text-center">
          <span class="text-yellow-300 m-1">
            <span>TURN</span>
          </span>
        </div>
        <div class="flex justify-center gap-2">
          <div
            id="p1card"
            class="text-center bg-yellow-300 py-2 px-4 border-b-4 border-r-4 border-yellow-400"
          >
            <span class="text-2xl mt-5 font-bungee">
              <span class="text-red-600 m-1">
                <span>Your CARD</span>
              </span>
            </span>
            <div class="flex justify-center">
              <img src="/back.png" alt="" srcset="" class="w-28" />
              <img src="/amb.png" alt="" srcset="" class="w-28" />
            </div>
          </div>
          <div
            id="p1card"
            class="text-center bg-slate-200 py-2 px-4 border-b-4 border-r-4 border-gray-400"
          >
            <span class="text-2xl mt-5 font-bungee">
              <span class="text-yellow-300 m-1">
                <span>P1</span>
              </span>
              <span class="text-red-600 m-1">
                <span>CARD</span>
              </span>
            </span>
            <div class="flex justify-center">
              <img src="/back.png" alt="" srcset="" class="w-28" />
              <img src="/back.png" alt="" srcset="" class="w-28" />
            </div>
          </div>
          <div
            id="p1card"
            class="text-center bg-slate-200 py-2 px-4 border-b-4 border-r-4 border-gray-400"
          >
            <span class="text-2xl mt-5 font-bungee">
              <span class="text-yellow-300 m-1">
                <span>P1</span>
              </span>
              <span class="text-red-600 m-1">
                <span>CARD</span>
              </span>
            </span>
            <div class="flex justify-center">
              <img src="/back.png" alt="" srcset="" class="w-28" />
              <img src="/amb.png" alt="" srcset="" class="w-28" />
            </div>
          </div>
          <div
            id="p1card"
            class="text-center bg-slate-200 py-2 px-4 border-b-4 border-r-4 border-gray-400"
          >
            <span class="text-2xl mt-5 font-bungee">
              <span class="text-yellow-300 m-1">
                <span>P1</span>
              </span>
              <span class="text-red-600 m-1">
                <span>CARD</span>
              </span>
            </span>
            <div class="flex justify-center">
              <img src="/back.png" alt="" srcset="" class="w-28" />
              <img src="/amb.png" alt="" srcset="" class="w-28" />
            </div>
          </div>
          <div
            id="p1card"
            class="text-center bg-slate-200 py-2 px-4 border-b-4 border-r-4 border-gray-400"
          >
            <span class="text-2xl mt-5 font-bungee">
              <span class="text-yellow-300 m-1">
                <span>P1</span>
              </span>
              <span class="text-red-600 m-1">
                <span>CARD</span>
              </span>
            </span>
            <div class="flex justify-center">
              <img src="/back.png" alt="" srcset="" class="w-28" />
              <img src="/amb.png" alt="" srcset="" class="w-28" />
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-20 justify-center items-center">
          <div
            class="text-2xl mt-5 font-bungee text-center bg-slate-200 py-2 px-4 border-b-4 border-r-4 border-gray-400"
          >
            <span class="text-yellow-300 m-1">
              <span>YOUR</span>
            </span>
            <span class="text-red-600 m-1">
              <span>CARD</span>
            </span>
          </div>
          <div class="flex justify-center">
            <img src="/back.png" alt="" srcset="" class="w-56" />
            <img src="/amb.png" alt="" srcset="" class="w-56" />
          </div>
          <div class="text-2xl mt-5 font-bungee text-center">
            <span class="text-yellow-300 m-1">
              <span>ACTION</span>
            </span>
            <span class="text-red-600 m-1">
              <span>CARD</span>
            </span>
          </div>
          <div class="flex gap-1 justify-center">
            <BaseButton text="income" />
            <BaseButton text="foreign aid" />
            <BaseButton text="tax" />
            <BaseButton text="assasinate" />
            <BaseButton text="exchange" />
            <BaseButton text="steal" />
          </div>
          <span class="text-2xl mt-5 font-bungee text-center">
            <span class="text-yellow-300 m-1">
              <span>COUNTE</span>
            </span>
            <span class="text-red-600 m-1">
              <span>RACTION</span>
            </span>
          </span>
          <div class="flex gap-1 justify-center">
            <BaseButton text="Block foreign aid" />
            <BaseButton text="Block Stealing" />
            <BaseButton text="Block assasination" />
            <BaseButton text="Pass" />
          </div>

          <span class="text-2xl mt-5 font-bungee text-center">
            <span class="text-yellow-300 m-1">
              <span>CHALLENGE</span>
            </span>
            <span class="text-red-600 m-1">
              <span>ACTION</span>
            </span>
          </span>
          <div class="flex gap-1 justify-center">
            <BaseButton text="Challenge" />
            <BaseButton text="Pass" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
