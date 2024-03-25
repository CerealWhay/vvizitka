<script setup lang="ts">
interface Props {
  item: {
    code: string;
    link: string;
    icon: string;
  }
}

// props
withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div class="social-item">
    <a :href="item.link" target="_blank" class="social-item__wrapper">
      <img :src="item.icon" :alt="item.code" class="social-item__icon">
    </a>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/style/mixins.adaptive" as adaptive;

.social-item {
  --social-item-size: 6rem;
  --social-icon-size: 3rem;


  width: var(--social-item-size);
  height: var(--social-item-size);

  &__wrapper {
    border-radius: 50%;
    border: 1px solid var(--surface-600);

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border .1s ease-in-out;

    &:hover {
      border-color: var(--surface-400);

    }
  }

  &__icon {
    width: var(--social-icon-size);
    height: var(--social-icon-size);
  }

  @include adaptive.md-max {
    --social-item-size: 3rem;
    --social-icon-size: 2rem;
  }
}
</style>