<script setup lang="ts">

import Title from "./Title.vue";
import ProjectsItem from "./ProjectsItem.vue";
import {ref} from "vue";

const projects = ref([
  {
    code: "shooter",
    title: "Шутерок",
    link: "https://shooter.cwcwcw.ru/",
    image: "",
  },
  {
    code: "weather",
    title: "Погода",
    link: "https://weather.cwcwcw.ru/",
    image: "",
  }
])
</script>

<template>
  <div class="projects-content">
    <Title class="projects-content__title">Мои поделки</Title>

    <div class="projects-content__body">
      <template v-for="project in projects" :key="project.code">
        <ProjectsItem :item="project" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects-content {
  display: flex;
  flex-direction: column;
  gap: var(--global-gap);

  &__body {
    display: flex;
    flex-direction: column;
    gap: var(--global-gap);
    align-items: stretch;
    justify-content: stretch;
  }
}
</style>