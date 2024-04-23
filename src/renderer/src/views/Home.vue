<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted } from 'vue'
import '@renderer/assets/flipClock.scss'
import FooterVue from '@renderer/components/footer.vue'

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
    <div id="bm" class="drag"></div>
    <FooterVue />
  </main>
</template>

<style lang="scss">
:root {
  --bgColor: #fff;
  --width: 35px;
  --color: #000;
}
</style>
