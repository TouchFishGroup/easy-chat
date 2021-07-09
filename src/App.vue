<template>
  <div id="easy-chat"
       class="bg-yellow-200 flex container mx-auto my-24  w-3/4 h-2/3">
    <div class="bg-pink-400 relative h-full w-1/6  container flex flex-col justify-around ">

      <user-profile></user-profile>
      <router-link to="/"
                   class="block border-2 rounded-full h-10 w-10 mx-auto  cursor-pointer">聊天列表</router-link>
      <router-link to="/friend"
                   class="block border-2 rounded-full h-10 w-10 mx-auto cursor-pointer">通讯录</router-link>
    </div>
    <div class="bg-red-600 h-full w-1/3">
      <input>
      <router-view></router-view>
    </div>
    <div class="bg-green-100 h-full w-1/2">3</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserProfile from "./components/UserProfile.vue";
export default defineComponent({
  name: "App",
  components: {
    UserProfile,
  },
});
</script>
<style >
body,
html {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>