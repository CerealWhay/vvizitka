<script setup lang="ts">

import Title from "./Title.vue";
</script>

<template>
  <div class="main-content">
    <Title class="main-content__title">Обо мне</Title>

    <div class="main-content__body">
      Привет, я Ваня и я frontend разработчик.
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-content {
  display: flex;
  flex-direction: column;
  gap: var(--global-gap);

  &__body {
    display: flex;
    flex-direction: column;
    gap: var(--global-gap);
  }
}
</style>