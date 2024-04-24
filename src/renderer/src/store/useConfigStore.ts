import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const config = ref({
    type: 'timing' as 'clock' | 'timing',
    timing: {
      hour: 0,
      minute: 30,
      second: 10
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
