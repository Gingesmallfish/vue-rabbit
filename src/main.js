import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

// 引入懒加载指令文件
import { lazyPlugin } from "@/directives/index.js";
// 引入全局组件
import {componentPlugin} from "@/components/index.js";

const app = createApp(App)

// 注册持久化插件
const pinia = createPinia(piniaPluginPersistedstate);
app.use(pinia)
app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')