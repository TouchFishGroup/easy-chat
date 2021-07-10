<template>
  <div ref="dropdownRef"
       class="w-full flex justify-around">
    <van-image id="avater"
    round
               fit="cover"
               class="h-10 w-10  cursor-pointer"
               :src='userList.avatarImg'
               @click.prevent='toggleOpen' />
  </div>
  <teleport to="#app">
    <div id="profile" class="absolute flex w-1/3 h-1/3 bg-gray-50 border-2 rounded-lg flex-col 	z-50 "
         v-if="isOpen"
         :style="{left:x+ 'px',top:y+ 'px'}"
         >
      <div class="h-1/2 w-full py-1 flex justify-around">
        <h1 class="display my-3">{{userList.name}}</h1>
        <van-image round
                   fit="cover"
                   class="h-14 w-14"
                   :src="userList.avatarImg" />
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
import { computed, defineComponent, onMounted, reactive, ref, watch } from "vue";
import {useStore} from 'vuex'
import {GlobalDataProps,UserProps} from '../store'
import useClickOutside from "../hooks/useClickOutside";
import useGetPosition from "../hooks/useGetPosition";
import axios from 'axios';
export default defineComponent({
   setup () {
    const isOpen = ref(false);
    const x = ref(0)
    const y = ref(0)
    // const store = useStore<GlobalDataProps>()
    // const userList= computed(():UserProps=>store.state.user)
    const userList = reactive({name:'',avatarImg:''})
    axios.get('/auth').then((res)=>{
      const {name ,avatarImg} = res.data;
      userList.name=name;
      userList.avatarImg=avatarImg;
    })
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
    console.log(userList)
    return {
      isOpen,
      toggleOpen,
      dropdownRef,
      x,y,
      userList
    };
  },
});
</script>
<style scoped>
</style>