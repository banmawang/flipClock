<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted } from 'vue'
import '@renderer/assets/flipClock.scss'
import FooterVue from '@renderer/components/footer.vue'
import { useConfigStore } from '@renderer/store/useConfigStore'

const { config } = useConfigStore()

onMounted(() => {
  const instance = new FlipClock({ el: '#bm', ...config })
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
