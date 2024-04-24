<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted } from 'vue'
import '@renderer/assets/flipClock.scss'
import FooterVue from '@renderer/components/footer.vue'
import { useConfigStore } from '@renderer/store/useConfigStore'

const { config } = useConfigStore()

onMounted(() => {
  const instance = new FlipClock({ el: '#bm', ...config.clock })
  instance.render()
})
</script>

<template>
  <main>
    <div
      id="bm"
      class="drag"
      :style="{ '--bgColor': config.clock.bgColor, '--color': config.clock.color }"
    ></div>
    <FooterVue />
  </main>
</template>

<style lang="scss">
:root {
  // --bgColor: #fff;
  // --width: 35px;
  // --color: #000;
}
</style>
