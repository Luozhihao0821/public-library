// 实现使用函数调用lm-message组件的逻辑
import { createVNode, render } from 'vue'
import LmMessage from './lm-message.vue'

// 准备dom容器
const div = document.createElement('div')
div.setAttribute('class', 'lm-message-container')
document.body.appendChild(div)
// 定时器标识
let timer = null

export default ({ type, text, times = 2 }) => {
    // 实现：根据lm-message.vue渲染消息提示
    // 1. 导入组件
    // 2. 根据组件创建虚拟节点
    const vnode = createVNode(LmMessage, { type, text })
    // 3. 准备一个DOM容器
    // 4. 把虚拟节点渲染DOM容器中
    render(vnode, div)
    // 5. 开启定时，移出DOM容器内容
    clearTimeout(timer)
    timer = setTimeout(() => {
        render(null, div)
    }, times*1000)
}