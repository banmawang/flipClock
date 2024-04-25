<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
</script>

<template>
  <main class="p-3 text-white drag bg-white bg-opacity-30 rounded-lg">
    <div class="bg-[#34495e] rounded-lg w-full p-2">
      <div class="card">
        <h2>时钟颜色</h2>
        <div class="body">
          <div class="block">
            背景颜色
            <el-color-picker v-model="config.clock.bgColor" />
          </div>
          <div class="block">
            文字颜色
            <el-color-picker v-model="config.clock.color" />
          </div>
        </div>
      </div>
      <div class="card">
        <h2>倒计时时间</h2>
        <div class="card flex flex-col gap-2">
          <div class="block">
            小时
            <el-input-number v-model="config.clock.timing.hour" :min="1" :max="10" size="small" />
          </div>
          <div class="block">
            分钟
            <el-input-number v-model="config.clock.timing.minute" size="small" />
          </div>
          <div class="block">
            秒钟
            <el-input-number v-model="config.clock.timing.second" size="small" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
h2 {
  @apply text-sm opacity-80 font-bold  mb-5 text-center pb-3;
}
.card {
  @apply w-full p-2 rounded-lg mb-2 bg-[#2c3e50];
  .body {
    @apply flex gap-2 p-3 rounded-md;
    .block {
      @apply flex flex-col text-xs gap-2;
      -webkit-app-region: no-drag;
    }
  }
}

.el-popper {
  -webkit-app-region: no-drag !important;
}
</style>
