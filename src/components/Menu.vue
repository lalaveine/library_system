<template>
  <div class="menu">
    <h2>Menu</h2>
    <a-menu style="width: 256px" :default-selected-keys="['1']" mode="vertical">
      <a-menu-item key="1">
        <router-link to="/">Journal</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/Book">Book</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/Reader">Reader</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/Author">Author</router-link>
      </a-menu-item>
      <a-menu-item key="5">
        <router-link to="/City">City</router-link>
      </a-menu-item>
      <a-menu-item key="6">
        <router-link to="/Edition">Editios</router-link>
      </a-menu-item>
      <a-menu-item key="7">
        <router-link to="/Library">Library</router-link>
      </a-menu-item>
      <a-menu-item key="8">
        <router-link to="/Publisher">Publisher</router-link>
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