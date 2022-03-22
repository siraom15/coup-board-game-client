<script setup>
import BaseButton from '../components/BaseButton.vue';
import SignDiv from '../components/SignDiv.vue';
import PlayerTurn from '../components/PlayerTurn.vue';
import TwoColorText from '../components/TwoColorText.vue';
import BaseButtonTooltips from '../components/BaseButtonTooltips.vue';
import YourCard from '../components/YourCard.vue';
import ChallengeActionModal from '../components/ChallengeActionModal.vue';

const player1 = {
  name: 'aommie',
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
    <ChallengeActionModal :isShow="false" />
    <SignDiv text="COUP GAME" />
    <div class="flex justify-end">
      <div class="flex">
        <sign-div text="GameId : 1231231" />
        <router-link to="/">
          <BaseButton text="leave room" />
        </router-link>
      </div>
    </div>

    <div class="grid grid-cols-3 mt-5">
      <!-- Turn -->
      <div class="flex flex-col items-center">
        <span class="text-2xl font-bungee text-center">
          <span class="text-yellow-300">
            <span>TURN</span>
          </span>
        </span>
        <div class="mt-2 flex flex-col items-center justify-center gap-2">
          <PlayerTurn :player="player1" :isCurrentTurn="true" />
          <PlayerTurn :player="player2" :isCurrentTurn="false" />
          <PlayerTurn :player="player2" :isCurrentTurn="false" />
          <PlayerTurn :player="player2" :isCurrentTurn="false" />
        </div>
      </div>

      <!-- current card -->
      <div class="mt-2 flex flex-col justify-center items-center gap-2">
        <SignDiv text="Game Log Lastest : P1 Income" />
        <TwoColorText
          left="Your"
          right="Card"
          class="text-xl sm:text-xl md:text-2xl lg:text-4xl"
        />
        <YourCard />
        <SignDiv text="Current Coin : 1" />
      </div>

      <!-- Actions -->
      <div class="mt-2 flex flex-col justify-center items-center gap-2">
        <div class="grid grid-cols-2 gap-3">
          <div class="flex flex-col">
            <TwoColorText left="ALL" right="ACTION" />
            <div class="flex flex-col gap-1 justify-start">
              <BaseButton text="income (+1)" />
              <BaseButton text="foreign aid (+2)" />
              <BaseButton text="tax (+3)" />
              <BaseButton text="coup (-7)" />
              <BaseButton text="assasinate (-3)" />
              <BaseButton text="exchange" />
              <BaseButton text="steal (+2)" />
            </div>
          </div>
          <div class="flex flex-col">
            <TwoColorText left="COUNTER" right="ACTION" />
            <div class="flex flex-col gap-2">
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
