import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Image as VanImage } from 'vant'//头像图片
import { Button } from 'vant';//按钮
import {Icon} from 'vant' //图标
import { Search } from 'vant'//搜索框
import './index.css'

// 替换 baseURL
axios.defaults.baseURL = 'http://81.70.81.69:3000/'
// axios.get('/auth')
      // .then((res)=>{console.log(res)})
const app = createApp(App)

app.use(router)
app.use(VanImage)
app.use(Button)
app.use(Icon)
app.use(Search)
app.use(store)
app.mount('#app')