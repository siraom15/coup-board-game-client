<script setup>
import TwoColorText from '../components/TwoColorText.vue';
import JoinGameForm from '../components/JoinGameForm.vue';
import BackButton from '../components/BackButton.vue';
</script>

<template>

    <div class="flex items-center justify-center h-screen">
      <div>
        <div class="flex flex-col justify-center items-center">
          <TwoColorText
            left="JOIN"
            right=" GAME"
            class="text-2xl sm:text-4xl md:text-4xl lg:text-7xl"
          />

          <JoinGameForm class="mt-5" />

          <router-link to="/" class="mt-5">
            <BackButton />
          </router-link>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
