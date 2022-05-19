import { App } from 'vue'
import { fy_Button } from './components/Button'
// 组件列表
const components = [
    fy_Button
]
// 使用所有组件
const install = (app: App) => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}
export {
    fy_Button,
    install
}
export default { install, fy_Button }
