<template>
  <div ref="dropdownRef"
       class="w-full flex justify-around">
    <van-image id="avater"
    round
               fit="cover"
               class="h-10 w-10  cursor-pointer"
               src="https://img.yzcdn.cn/vant/cat.jpeg"
               @click.prevent='toggleOpen' />
  </div>
  <teleport to="#app">
    <div id="profile" class="absolute flex w-1/3 h-1/3 bg-gray-50 border-2 rounded-lg flex-col 	z-50 "
         v-if="isOpen"
         :style="{left:x+ 'px',top:y+ 'px'}"
         >
      <div class="h-1/2 w-full py-1 flex justify-around">
        <h1 class="display my-3">用户名</h1>
        <van-image round
                   fit="cover"
                   class="h-14 w-14"
                   src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="h-1/2 w-full py-1 flex justify-around">
        <van-button plain
                    type="primary"
                    class="w-2/5 ">编辑资料</van-button>
        <van-button plain
                    type="primary"
                    class="w-2/5">退出登录</van-button>
      </div>

    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import useClickOutside from "../hooks/useClickOutside";
import useGetPosition from "../hooks/useGetPosition";
export default defineComponent({
  setup() {
    const isOpen = ref(false);
    const x = ref(0)
    const y = ref(0)
    onMounted(()=>{
     x.value =  useGetPosition().x1
     y.value =  useGetPosition().y1
    })
    const dropdownRef = ref<null | HTMLElement>(null);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    const isClickOutside = useClickOutside(dropdownRef);
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false;
      }
    });
    return {
      isOpen,
      toggleOpen,
      dropdownRef,
      x,y
    };
  },
});
</script>
<style scoped>
</style>