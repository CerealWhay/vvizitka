<script setup lang="ts">

import BorderedWrapper from "./BorderedWrapper.vue";

interface Props {
  item: {
    code: string;
    link: string;
    title: string;
    image: string;
  }
}

// props
withDefaults(defineProps<Props>(), {})
</script>

<template>
  <a :href="item.link" target="_blank">
    <BorderedWrapper is-top is-bottom is-left is-right class="project-item">
      <div class="project-item__title">
        {{ item.title }}
      </div>

      <div class="project-item__decoration">
        <div class="project-item__line"></div>
        <div class="project-item__line"></div>
        <div class="project-item__line"></div>
      </div>
    </BorderedWrapper>
  </a>
</template>

<style scoped lang="scss">
.project-item {
  --border-color: var(--surface-600);

  position: relative;
  overflow: hidden;

  &__decoration {
    height: 300%;
    width: 5rem;
    position: absolute;
    top: -50px;
    right: var(--global-gap);

    display: flex;
    gap: 1rem;

    rotate: 45deg;
  }

  &__line {
    display: block;
    width: 1rem;
    height: 100%;
    background: var(--surface-800);
  }

  &:hover {
    --border-color: var(--surface-400);
  }
}
</style>