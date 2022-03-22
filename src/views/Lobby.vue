<script setup></script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <div class="flex flex-col justify-center items-center">
        <span class="text-7xl mt-5 font-bungee text-center">
          <span class="text-yellow-300 m-1">
            <span>LOBBY</span>
          </span>
          <span class="text-red-600 m-1">
            <span>GAME</span>
          </span>
        </span>
        <div
          class="mt-5 font-bungee bg-yellow-300 hover:bg-blue-light py-2 px-4 border-b-4 border-yellow-400 text-red-600 flex"
        >
          <p>ROOM ID : 123-123-1233</p>
          <button>
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </button>
        </div>
        <div
          class="mt-5 font-bungee bg-yellow-300 hover:bg-blue-light py-2 px-4 border-b-4 border-yellow-400 text-red-600"
        >
          <p>PLAYER IN LOBBY</p>
        </div>
        <router-link to="/">
          <button
            class="mt-5 font-bungee bg-red-600 hover:bg-blue-light text-white py-2 px-4 border-b-4 border-red-700 hover:border-blue rounded"
          >
            LEAVE ROOM
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
