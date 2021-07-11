<template>
  <div id="easy-chat"
       class="bg-black flex container mx-auto my-16  w-3/4 h-3/4 border-2 rounded border-black">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App"
});
</script>
<style >

</style>