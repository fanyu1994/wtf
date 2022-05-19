import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist' // 数据缓存

const store = createPinia()
store.use(piniaPluginPersist)

createApp(App).use(createPinia()).mount('#app')
