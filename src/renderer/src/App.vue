<script setup lang="ts">
import useMouseEvent from './composables/useMouseEvent'
import FooterVue from '@renderer/components/footer.vue'
import { Crown } from '@icon-park/vue-next'

const { setIgnoreMouseEvents } = useMouseEvent()

setIgnoreMouseEvents()
</script>

<template>
  <Suspense>
    <RouterView v-slot="{ Component }">
      <div>
        <div class="flex justify-center w-full mb-2 drag">
          <crown theme="outline" size="35" class="text-yellow-400" />
        </div>
        <component :is="Component" class="flex flex-col justify-center items-center" />
        <FooterVue />
      </div>
    </RouterView>
  </Suspense>
</template>

<style lang="less"></style>
