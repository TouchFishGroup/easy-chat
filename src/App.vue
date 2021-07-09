<template>
  <div id="easy-chat" class="bg-yellow-200 flex container mx-auto my-24 w-3/4 h-2/3 overflow-hidden">
    <div class="bg-pink-400 h-full w-1/6 flex flex-col justify-between">
      <div class="block border-2 rounded-full h-10 w-10 cursor-pointer">头像</div>
      <router-link to="/" class="block border-2 rounded-full h-10 w-10 cursor-pointer">聊天列表</router-link>
      <router-link to="/friend" class="block border-2 rounded-full h-10 w-10 cursor-pointer">通讯录</router-link>
    </div>
    <div class="bg-red-600 h-full w-1/3">
      <input>
      <router-view></router-view>
    </div>
    <div class="bg-green-100 h-full w-1/2">3</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<style >
  body,html {
    height: 100%;
    width: 100%;
    overflow: hidden;
    }
</style>