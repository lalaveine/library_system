<template>
  <div class="main">
    <Menu />
      <router-view></router-view>
  </div>
</template>

<script>
// import SearchData from "@/components/SearchData.vue";
import Menu from "@/components/Menu.vue";
import "ant-design-vue/dist/antd.less";
import router from '../router.js'

export default {
  name: "main",
  components: {
//    SearchData,
    Menu
  },
  router,
};
</script>

<style>
.main {
  width: 100%;
  display: flex; 
}

.component{
    width: 100%;
}

/* hr {
  border: none;
  margin-bottom: 20px;
  background-color: rgba(217, 217, 217, 0.5);
  height: 1px;
} */

.content {
  padding: 15px;
   width: 100%;
display: flex;
  flex-direction: row;
}

.ant-form .ant-form-item-label {
  text-align: left;
}

.ant-col-5 {
    width: 100%;
}

h1{
  color: #52c41a;
  font-size: 45px;
  text-align: center;
}
h2 {
   text-align: center;
     margin-bottom: 30px;
  font-size: 25px;
}

.ant-form {
  width: 50%;
}

.action-buttons {
  display: flex;
  margin: 10px;
  flex-direction: column;
}

.ant-btn{
  margin: 3px;
}

.buttons {
  display: flex;
  flex-direction: column;
}
</style>

