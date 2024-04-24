<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
import Navbar from '@renderer/components/Navbar.vue'

const { config } = useConfigStore()
</script>

<template>
  <main
    class="drag w-full px-2 text-center mt-2 rounded-md text-white flex justify-between items-center"
    :style="{ backgroundColor: config.footer.bgColor, color: config.footer.color }"
  >
    <div class="text-sm">斑马兽网站，作者：何俊</div>
    <Navbar />
  </main>
</template>

<style lang="scss" scoped>
main {
  user-select: none;
}
</style>
