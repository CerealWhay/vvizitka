<script setup lang="ts">

import {onMounted, ref} from "vue";
import {Canvas} from "../background/models/Canvas.ts";
import {Engine} from "../background/controllers/engine.ts";
import {useAppStore} from "../background/stores/appStore.ts";


let engine: Engine;
const store = useAppStore()
const canvas = ref();

onMounted(() => {
  store.setCanvas(new Canvas(innerWidth, innerHeight, canvas.value))
  engine = new Engine()
  engine.toggleReaction()
});
</script>

<template>
  <div class="app-decoration">
    <div class="app-decoration__canvas">
      <canvas ref="canvas"></canvas>
    </div>

    <div class="app-decoration__decoration">
      <div class="app-decoration__line"></div>
      <div class="app-decoration__line"></div>
      <div class="app-decoration__line"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-decoration {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: end;

  &__canvas {
    position: absolute;
    z-index: -1;

    canvas {
      display: block;
      max-width: 100%;
    }
  }

  &__decoration {
    height: 100%;
    width: 5rem;
    margin-right: 1.5rem;
    display: flex;
    gap: 1rem;

    //rotate: 45deg;
  }

  &__line {
    display: block;
    width: 1rem;
    height: 100%;
    background: var(--surface-800);
  }
}
</style>