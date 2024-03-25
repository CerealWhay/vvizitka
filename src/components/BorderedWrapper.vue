<script setup lang="ts">
// types
interface Props {
  isTop?: boolean;
  isRight?: boolean;
  isLeft?: boolean;
  isBottom?: boolean;
}

// props
withDefaults(defineProps<Props>(), {
  isTop: false,
  isRight: false,
  isBottom: false,
  isLeft: false,
})
</script>

<template>
  <div class="bordered-wrapper">
    <slot />
    <div class="bordered-wrapper__borders">
      <div v-if="isTop" class="bordered-wrapper__border bordered-wrapper__border--top"></div>
      <div v-if="isRight" class="bordered-wrapper__border bordered-wrapper__border--right"></div>
      <div v-if="isBottom" class="bordered-wrapper__border bordered-wrapper__border--bottom"></div>
      <div v-if="isLeft" class="bordered-wrapper__border bordered-wrapper__border--left"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bordered-wrapper {
  --border-size: calc(100% - var(--global-gap));
  --border-color: var(--surface-300);

  padding: var(--global-gap);
  position: relative;

  &__border {
    position: absolute;
    display: flex;

    &:before {
      content: "";
      display: block;
      background: var(--border-color);
      transition: background .1s ease-in-out;
    }
  }

  &__border--bottom {
    bottom: 0;
    left: 0;
    justify-content: center;
    width: 100%;
    &:before {
      width: var(--border-size);
      height: 1px;
    }
  }

  &__border--top {
    top: 0;
    left: 0;
    justify-content: center;
    width: 100%;
    &:before {
      width: var(--border-size);
      height: 1px;
    }
  }

  &__border--left {
    left: 0;
    top: 0;
    align-items: center;
    height: 100%;
    &:before {
      height: var(--border-size);
      width: 1px;
    }
  }

  &__border--right {
    right: 0;
    top: 0;
    align-items: center;
    height: 100%;
    &:before {
      height: var(--border-size);
      width: 1px;
    }
  }
}
</style>