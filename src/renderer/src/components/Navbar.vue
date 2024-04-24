<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'

const { config } = useConfigStore()

const toggle = () => {
  config.clock.type = config.clock.type == 'clock' ? 'timing' : 'clock'
}
</script>

<template>
  <main
    class="bg-white mb-2 w-full rounded-md px-2 opacity-100 hover:opacity-100 flex justify-between"
  >
    <span @click="toggle">切换-- {{ config.clock.type }}</span>
    <div class="flex gap-1 text-sm opacity-80 text-gray-800">
      <router-link v-if="$route.name === 'clock'" :to="{ name: 'config' }">配置</router-link>
      <router-link v-else :to="{ name: 'clock' }">时钟</router-link>
    </div>
  </main>
</template>

<style lang="scss"></style>
