<script setup lang="ts">
import Navbar from '@renderer/components/Navbar.vue'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { ref } from 'vue'
const { config } = useConfigStore()
const flag = ref(true)
const isShow = ref(false)

const mouseover = () => {
  flag.value = false
  isShow.value = true
}
</script>

<template>
  <main
    v-show="flag"
    class="nodrag w-full px-2 text-center mt-2 py-1 font-bold rounded-md text-white flex items-center"
    :class="{ 'opacity-0': !config.footer.isShow }"
    :style="{ backgroundColor: config.footer.bgColor, color: config.footer.color }"
    @mouseover="mouseover"
  >
    <div v-if="config.clock.type != 'timing'" class="text-sm isrun">
      {{ config.footer.content }}
    </div>
    <div v-else class="text-sm run">{{ config.footer.content }}</div>
  </main>
  <Navbar
    v-show="!flag && isShow"
    class="nodrag w-full select-none px-2 text-center mt-2 py-1 font-bold rounded-md text-white flex justify-center items-center bg-red-500 z-9999"
    @mouseleave="flag = true"
  />
</template>

<style lang="scss" scoped>
main {
  user-select: none;
}

.run {
  animation: identifier 10s infinite both;
}

.isrun {
  animation: isidentifier 10s infinite both;
}

@keyframes identifier {
  from {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(190px - 100%));
  }
  to {
    transform: translateX(0);
  }
}

@keyframes isidentifier {
  from {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(300px - 100%));
  }
  to {
    transform: translateX(0);
  }
}
</style>
