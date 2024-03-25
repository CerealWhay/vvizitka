<script setup lang="ts">
import {computed} from "vue";

// components
import BorderedWrapper from "./components/BorderedWrapper.vue";
import MainContent from "./components/MainContent.vue";
import ProjectsContent from "./components/ProjectsContent.vue";
import SocialsContent from "./components/SocialsContent.vue";
import AppDecoration from "./components/AppDecoration.vue";

// vueUse
import {useWindowSize} from "@vueuse/core";
const {width} = useWindowSize();

// computed
const isMobile = computed(() => width.value <= 768)
</script>

<template>
  <div class="app">
    <AppDecoration />
    <div class="app__container">
      <BorderedWrapper class="app__wrapper" is-top is-right is-left is-bottom>
        <BorderedWrapper class="app__main" is-bottom>
          <MainContent />
        </BorderedWrapper>
        <BorderedWrapper class="app__projects">
          <ProjectsContent />
        </BorderedWrapper>
        <BorderedWrapper class="app__socials" :is-left="!isMobile" :is-top="isMobile">
          <SocialsContent />
        </BorderedWrapper>
      </BorderedWrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./assets/style/mixins.adaptive" as adaptive;

.app {
  --app-padding: 3rem;
  --container-width: 1200px;

  height: 100vh;

  overflow: hidden;
  padding: var(--app-padding);
  position: relative;

  &__container {
    max-width: var(--container-width);
    margin: 0 auto;
    height: 100%;
  }

  &__wrapper {
    background: var(--primary-50);
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr auto;
    padding: 0;
    position: relative;
  }

  &__main {
    width: 100%;
  }

  &__projects {
    grid-row: 2;
  }

  &__socials {
    grid-row: span 2;
  }

  @include adaptive.lg-max {
    --app-padding: 2rem;
    --global-gap: 1.5rem;
  }

  @include adaptive.md-max {
    height: 100%;
    &__wrapper {
      display: block;
    }
  }

  @include adaptive.sm-max {
    --app-padding: 1rem;
    --global-gap: 1rem;

    padding-top: 5rem;
  }
}
</style>
