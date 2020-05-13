<template>
  <div class="menu">
    <h2>Menu</h2>
    <a-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      mode="vertical"
      @click="handleClick"
    >
      <a-menu-item key="1">
        <router-link to="/">Journal</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/search">Search data</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/input">Input data</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { Menu } from "ant-design-vue";

export default {
  components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-menuu-item-group": Menu.ItemGroup
  }
};
</script>

<style>
h2 {
  text-align: center;
  padding-top: 10px;
}
</style>