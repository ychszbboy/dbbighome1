import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
createApp(App)
.use(ElementPlus).use(store).use(router).use(router).mount('#app')
