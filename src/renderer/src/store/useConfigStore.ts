import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const config = ref({
    clock: {
      bgColor: '#fff',
      color: '#000',
      type: 'clock' as 'clock' | 'timing',
      timing: {
        hour: 0,
        minute: 30,
        second: 10
      }
    },
    footer: {
      bgColor: '#16a085',
      color: '#fff'
    }
  })
  // function increment() {
  //   count.value++
  // }

  return {
    config
    // increment
  }
})