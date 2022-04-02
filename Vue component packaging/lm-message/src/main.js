import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ui from './components/library/index'

createApp(App).use(store).use(router).use(ui).mount('#app')
