import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      clock: {
        bgColor: '#fff',
        color: '#000',
        type: 'timing' as 'clock' | 'timing',
        timing: {
          hour: 0,
          minute: 30,
          second: 10
        }
      },
      footer: {
        bgColor: '#16a085',
        color: '#fff',
        content: '作者：斑马兽'
      }
    })
    // function increment() {
    //   count.value++
    // }

    return {
      config
      // increment
    }
  },
  { persist: false }
)
