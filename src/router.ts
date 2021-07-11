import { createRouter, createWebHistory } from 'vue-router'
import ChatList from './views/ChatList.vue'
import FriendList from './views/FriendList.vue'
import Home from './views/Home.vue'
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
    }
  ]
})
export default router
