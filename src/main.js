import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import { Swipe, SwipeItem } from 'vant';
import '@vant/touch-emulator';

// 重置css样式
import "normalize.css"
import './assets/css/index.css'
// 引入组件样式（vant组件库）
import 'vant/lib/index.css';


const app = createApp(App)

app.use(router)
app.use(pinia)
// 轮播图
app.use(Swipe);
app.use(SwipeItem);

app.mount('#app')
