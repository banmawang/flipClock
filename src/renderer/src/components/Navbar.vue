<script setup lang="ts">
import { AlarmClock, Time } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/store/useConfigStore'

const { config } = useConfigStore()

const toggle = () => {
  config.clock.type = config.clock.type == 'clock' ? 'timing' : 'clock'
}
</script>

<template>
  <main
    class="bg-white mb-2 w-full py-1 rounded-md px-2 opacity-100 hover:opacity-100 flex justify-between"
  >
    <div @click="toggle">
      <alarm-clock v-if="config.clock.type == 'timing'" theme="outline" size="20" fill="#333" />
      <Time v-else theme="outline" size="20" fill="#333" />
    </div>
    <div class="flex gap-1 text-sm opacity-80 text-gray-800">
      <router-link v-if="$route.name === 'clock'" :to="{ name: 'config' }">配置</router-link>
      <router-link v-else :to="{ name: 'clock' }">时钟</router-link>
    </div>
  </main>
</template>

<style lang="scss"></style>
