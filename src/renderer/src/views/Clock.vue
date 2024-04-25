<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted, watch } from 'vue'
import '@renderer/assets/flipClock.scss'
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
const instance = new FlipClock({ el: '#bm', ...config.clock })

watch(
  () => config.clock.type,
  () => {
    instance
      .destroy()
      .config({ el: '#bm', ...config.clock })
      .render()
  }
)

onMounted(() => {
  instance.render()
})

// 刷新倒计时
const refresh = () => {
  if (config.clock.type == 'clock') return
  instance
    .destroy()
    .config({ el: '#bm', ...config.clock })
    .render()
}
</script>

<template>
  <main>
    <div
      id="bm"
      :style="{ '--bgColor': config.clock.bgColor, '--color': config.clock.color }"
      @dblclick="refresh"
    ></div>
  </main>
</template>

<style lang="scss"></style>
