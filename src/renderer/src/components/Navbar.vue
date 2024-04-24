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
    class="py-1 nodrag rounded-md px-2 flex justify-between items-center gap-1"
    :style="{ color: config.footer.color }"
  >
    <div @click="toggle">
      <alarm-clock v-if="config.clock.type == 'timing'" theme="outline" size="16" />
      <Time v-else theme="outline" size="16" />
    </div>
    <div class="flex gap-2 text-sm opacity-80">
      <router-link v-if="$route.name === 'clock'" :to="{ name: 'config' }">配置</router-link>
      <router-link v-else :to="{ name: 'clock' }">时钟</router-link>
    </div>
  </main>
</template>

<style lang="scss"></style>
