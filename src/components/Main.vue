<template>
  <div class="main">
    <Menu />
      <router-view></router-view>
  </div>
</template>

<script>
// import SearchData from "@/components/SearchData.vue";
import Menu from "@/components/Menu.vue";
import "ant-design-vue/dist/antd.css";
import router from '../router.js'

export default {
  name: "main",
  components: {
//    SearchData,
    Menu
  },
  router
};
</script>

<style>
.main {
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>

