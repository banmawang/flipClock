<script setup lang="ts">
import Navbar from '@renderer/components/Navbar.vue'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { ref } from 'vue'

const { config } = useConfigStore()
const flag = ref(true)
const isShow = ref(false)
const mouseInside = ref(false)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const timer: any = ref(null)

const handleMouseEnter = () => {
  clearTimeout(timer.value)
  mouseInside.value = true
  flag.value = false
  isShow.value = true
}

const handleMouseLeave = () => {
  mouseInside.value = false
  timer.value = setTimeout(() => {
    if (!mouseInside.value) {
      flag.value = true
      isShow.value = false
    }
  }, 10)
}
</script>

<template>
  <main
    v-show="flag"
    class="nodrag w-full px-2 text-center mt-2 py-1 font-bold rounded-md text-white flex items-center"
    :class="{ 'opacity-0': !config.footer.isShow }"
    :style="{ backgroundColor: config.footer.bgColor, color: config.footer.color }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div v-if="config.clock.type != 'timing'" class="text-sm isrun">
      {{ config.footer.content }}
    </div>
    <div v-else class="text-sm run">{{ config.footer.content }}</div>
  </main>
  <Navbar
    v-show="!flag && isShow"
    class="nodrag w-full select-none px-2 text-center mt-2 py-1 font-bold rounded-md text-white flex justify-center items-center bg-red-500 z-9999"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  />
</template>

<style lang="scss" scoped>
main {
  user-select: none;
}

.run {
  --slide-distance: calc(190px - 100%);
  animation: slide 10s infinite both;
}

.isrun {
  --slide-distance: calc(300px - 100%);
  animation: slide 10s infinite both;
}

@keyframes slide {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(var(--slide-distance));
  }
}
</style>
