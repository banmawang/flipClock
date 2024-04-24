<script setup lang="ts">
import useMouseEvent from './composables/useMouseEvent'

const { bm } = useMouseEvent()

bm()
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style lang="less"></style>
