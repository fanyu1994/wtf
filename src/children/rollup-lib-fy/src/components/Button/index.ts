import Button from './button.vue'
import type { App } from 'vue'
const fy_Button = Button.install = (app: App) => {
  app.component(fy_Button.name, fy_Button)
}


export { fy_Button }