<script setup lang="ts">
import useMouseEvent from './composables/useMouseEvent'
import Navbar from './components/Navbar.vue'

const { bm } = useMouseEvent()

bm()
</script>

<template>
  <Suspense>
    <RouterView v-slot="{ Component }">
      <Navbar />
      <div class="drag">
        <component :is="Component" class="flex flex-col justify-center items-center" />
      </div>
    </RouterView>
  </Suspense>
</template>

<style lang="less"></style>
