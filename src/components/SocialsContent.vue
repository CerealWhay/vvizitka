<script setup lang="ts">
// components
import Title from "./Title.vue";
import SocialItem from "./SocialItem.vue";
import {ref} from "vue";

// data
const socials = ref([
  {
    code: "tg",
    link: "https://t.me/preparabola",
    icon: "./icons/telegram-outline.svg"
  },
  {
    code: "gmail",
    link: "mailto:cerealwhay@gmail.com",
    icon: "./icons/mail-outline.svg"
  },
  {
    code: "hh",
    link: "https://spb.hh.ru/resume/728c07c0ff0788716c0039ed1f57624470724a",
    icon: "./icons/hh.svg"
  },
  {
    code: "github",
    link: "https://github.com/CerealWhay",
    icon: "./icons/github-outline.svg"
  },
])
</script>

<template>
  <div class="socials-content">
    <Title class="socials-content__title">Соц. сети</Title>

    <div class="socials-content__body">
      <template v-for="social in socials" :key="social.code">
        <SocialItem :item="social"/>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/style/mixins.adaptive" as adaptive;

.socials-content {
  display: flex;
  flex-direction: column;
  gap: var(--global-gap);
  align-items: center;

  &__body {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    gap: var(--global-gap);
    align-items: center;
    flex-wrap: wrap ;
  }

  @include adaptive.md-max {
    &__body {
      flex-direction: row;
    }
  }
}
</style>