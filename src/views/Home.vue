<template>
    <div class="bg-gray-700 relative h-full w-1/6  container flex flex-col justify-around  max-w-80px">

      <user-profile></user-profile>
      <router-link to="/chat"
                   class="block  h-10 w-10 mx-auto  cursor-pointer">
        <van-icon name="chat-o"
                  size="2.5rem" />
      </router-link>
      <router-link to="/friend"
                   class="block  h-10 w-10 mx-auto cursor-pointer">
        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
                  size="2.5rem" />
      </router-link>
    </div>
    <div class="bg-red-600 h-full w-1/3 flex-grow">
      <form action="/">
        <van-search v-model="searchValue"
                    show-action
                    placeholder="请输入搜索关键词"
                    background="#e5e7eb"
                    @search="onSearch"
                    @cancel="onCancel" />
      </form>
      <router-view></router-view>
    </div>
    <div class="bg-green-100 h-full w-1/2 flex-grow">3</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Toast } from "vant";
import UserProfile from "../components/UserProfile.vue";
export default defineComponent({
  name: "Home",
  components: {
    UserProfile,
  },
  setup() {
    const searchValue = ref("");
    const onSearch = (val: string) => Toast(val);
    const onCancel = () => Toast("取消");

    return { searchValue, onSearch, onCancel };
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