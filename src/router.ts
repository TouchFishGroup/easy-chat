import { createRouter,createWebHistory } from 'vue-router'
import ChatList from './views/ChatList.vue'
import FriendList from './views/FriendList.vue'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes:[
    {
      path:'/',
      name:'chatlist',
      component: ChatList
    },
    {
      path:'/friend',
      name:'friendlist',
      component:FriendList
    }
  ]
})
export default router