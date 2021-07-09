import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Image as VanImage } from 'vant'//头像图片
import { Button } from 'vant';
import './index.css'
const app = createApp(App)

app.use(router)
app.use(VanImage)
app.use(Button)
app.mount('#app')