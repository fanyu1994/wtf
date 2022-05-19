import { createSSRApp } from 'vue';

const app = createSSRApp({
  data: () => {
    return {
      count: 1
    }
  },
  template: `<button @click="count++">{{ count }}</button>`
})

export default app