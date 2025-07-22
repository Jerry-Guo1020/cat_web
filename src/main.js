import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'   // <-- 1. 引入 router

const app = createApp(App)
app.use(router)                 // <-- 2. 注册 router
app.mount('#app')               // <-- 3. 挂载
