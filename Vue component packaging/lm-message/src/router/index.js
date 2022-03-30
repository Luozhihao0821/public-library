import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Message from '../views/Message.vue'

const routes = [
  {
    path: '/',
    component: Message
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
