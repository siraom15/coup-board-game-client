<script setup>
import BaseButton from '../components/BaseButton.vue';
import TwoColorText from '../components/TwoColorText.vue';
import BackButton from '../components/BackButton.vue';
import SignDiv from '../components/SignDiv.vue';
</script>

<template>
  <div class="flex items-center justify-center mt-10">
    <div class="flex flex-col justify-center items-center">
      <TwoColorText
        left="HOW TO"
        right=" PLAY"
        class="text-3xl sm:text-5xl md:text-5xl lg:text-7xl mt-5"
      />

      <div class="mt-5 flex gap-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lPlBDZnxHQA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <router-link to="/" class="mt-5">
        <BackButton />
      </router-link>
    </div>
    
  </div>
</template>

<style scoped></style>
