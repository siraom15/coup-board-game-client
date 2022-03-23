<script setup>
import BaseButton from '../components/BaseButton.vue';
import SignDiv from '../components/SignDiv.vue';
import PlayerTurn from '../components/PlayerTurn.vue';
import TwoColorText from '../components/TwoColorText.vue';
import BaseButtonTooltips from '../components/BaseButtonTooltips.vue';
import YourCard from '../components/YourCard.vue';
import ChallengeActionModal from '../components/ChallengeActionModal.vue';
import { ref } from '@vue/reactivity';

const isShowCard = ref(true);

const player1 = {
  name: 'aommie',
  cards: [],
};

const player2 = {
  name: 'Bot',
};

const actions = {
  income: {},
  foreign_aid: {},
  tax: {},
  assasinate: {},
  exchange: {},
  steal: {},
};

const counterations = {
  block_steal: {},
  block_foreign_aid: {},
  block_assasinate: {},
  pass: {},
};

const challenges = {
  challenge: {},
  pass: {},
};
</script>

<template>
  <div class="h-screen">
    <ChallengeActionModal :isShow="true" />
    <SignDiv
      text="COUP GAME"
      class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl"
      hidden
    />
    <div class="flex">
      <SignDiv text="GameId : 1231231"  />
      <SignDiv text="Coup Game" class="flex-auto" />
      <router-link to="/">
        <BaseButton text="leave room" />
      </router-link>
    </div>

    <div class="lg:grid lg:grid-cols-3 flex flex-col  lg:mt-20">
      <!-- Turn -->
      <div class="flex flex-col justify-center items-center p-2">
        <TwoColorText
          left="CURRENT"
          right="TURN"
          class="text-xl sm:text-xl md:text-2xl lg:text-4xl"
        />
        <div
          class="justify-center items-center gap-1 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 "
        >
          <PlayerTurn :player="player1" :isCurrentTurn="true" />
          <PlayerTurn :player="player2" :isCurrentTurn="false" />
          <PlayerTurn :player="player2" :isCurrentTurn="false" />
          <PlayerTurn :player="player2" :isCurrentTurn="false" />
        </div>
      </div>

      <!-- current card -->
      <div class="flex flex-col justify-center items-center gap-2 p-2">
        <SignDiv text="Game Log Lastest : P1 Income" class="animate-pulse" />
        <TwoColorText
          left="Your"
          right="Card"
          class="text-xl sm:text-xl md:text-2xl lg:text-4xl"
        />
        <YourCard :playerCard="player" />
        <!-- <YourCard  /> -->
        <BaseButton text="Toggle Card" color="green" />
        <!-- <p class="text-white font-bungee mt-10">Current Coin : 1</p> -->
        <SignDiv text="Current Coin : 1" class="mt-5" />
      </div>

      <!-- Actions -->
      <div class="flex flex-col justify-center items-center gap-2 p-2">
        <div class="grid grid-cols-2 gap-3">
          <div class="flex flex-col items-center gap-1">
            <TwoColorText
              left="ALL"
              right="ACTION"
              class="text-xl sm:text-xl md:text-2xl lg:text-2xl"
            />
            <div class="flex flex-col gap-1 justify-center items-center">
              <BaseButton text="income (+1)" />
              <BaseButton text="foreign aid (+2)" />
              <BaseButton text="tax (+3)" />
              <BaseButton text="coup (-7)" />
              <BaseButton text="assasinate (-3)" />
              <BaseButton text="exchange" />
              <BaseButton text="steal (+2)" />
            </div>
          </div>
          <div class="flex flex-col items-center gap-1">
            <TwoColorText
              left="COUNTER"
              right="ACTION"
              class="text-xl sm:text-xl md:text-2xl lg:text-2xl"
            />
            <div class="flex flex-col gap-1 justify-start">
              <BaseButton text="Block foreign aid" />
              <BaseButton text="Block Stealing" />
              <BaseButton text="Block assasination" />
              <BaseButton text="Pass" color="green" />
            </div>
          </div>
        </div>
        <!-- <div class="grid grid-cols-1 gap-3 mt-20">
          <TwoColorText left="CHALLENGE" right="ACTION" />
          <div class="flex gap-1 justify-center">
            <BaseButton text="Challenge" />
            <BaseButton text="Pass" color="green" />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
