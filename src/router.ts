import { createRouter, createWebHistory } from 'vue-router'
import ChatList from './views/ChatList.vue'
import FriendList from './views/FriendList.vue'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'chat',
          name: 'chatlist',
          component: ChatList
        },
        {
          path: '/friend',
          name: 'friendlist',
          component: FriendList
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/signup',
      name:'signup',
      component:Signup
    }
  ]
})
export default router
