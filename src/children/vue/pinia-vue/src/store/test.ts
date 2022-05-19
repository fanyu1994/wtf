import { defineStore } from 'pinia';
const useTestStore = defineStore('testStore', {
  state: (): any =>
  ({
    counter: 0,
    name: '你信我就拿',
    isAdmin: true,
  }),
  getters: {
    getterisAdmin(state) {
      if (state.isAdmin) {
        return `结果:${state.isAdmin}`
      }
      return "结果:错误警告!!"
    }
  },
  actions: {
    counteradd() {
      this.counter++
    },
    async nameAdd(a: string, b: string) {
      const add = () => {
        return new Promise(resolve => {
          const s = a + b
          setTimeout(() => {
            resolve(s)
          }, 2000);
        })
      }
      try {
        const res = await add()
        console.log(res);
        this.name = res;
      } catch (e) {
        console.log(e);
      }
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    // 持久化部分数据
    strategies: [
      {
        storage: localStorage,
        paths: ['name', 'isAdmin']
      }
    ]
  }
})

export {
  useTestStore
}



