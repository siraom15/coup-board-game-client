<script setup>
import BaseButton from '../components/BaseButton.vue';
import TwoColorText from '../components/TwoColorText.vue';
import PlayerLobby from '../components/PlayerLobby.vue';
import SignDiv from '../components/SignDiv.vue';
import random from '../utils/random.js';
const randomRoomId = random();
</script>

<template>

    <div class="flex items-center justify-center h-screen">
      <div>
        <div class="flex flex-col justify-center items-center">
          <TwoColorText
            left="HOST"
            right=" GAME"
            class="text-2xl sm:text-4xl md:text-4xl lg:text-7xl mt-5"
          />

          <SignDiv :text="`Game Id : ${randomRoomId}`" />
          <PlayerLobby class="mt-2" />
          <div class="flex gap-4 mt-5">
            <router-link to="/play">
              <BaseButton text="Start Game" color="green" />
            </router-link>
            <router-link to="/">
              <BaseButton text="Leave Game" color="red" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
