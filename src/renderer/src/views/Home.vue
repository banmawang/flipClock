<script setup lang="ts">
import '@renderer/assets/flipClock.scss'
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted } from 'vue'
onMounted(() => {
  const instance = new FlipClock({
    el: '#bm',
    // style: 'base',
    type: 'clock',
    timing: {
      // hour: 8,
      // minute: 30,
      second: 10
    }
  })
  instance.render()
})
</script>

<template>
  <main>
    <div id="bm"></div>
  </main>
</template>

<style lang="scss"></style>
