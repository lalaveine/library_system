<template>
  <div style="menu" >
    <a-button type="primary" :style="collapsed ? 'width: 78px' : 'width: 130px'" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
      style="height: 100%"
      :default-selected-keys="['1']"
      mode="inline"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <a-icon type="profile" />
        <span>Journal</span>
        <router-link to="/"></router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="read" />
        <span>Book</span>
        <router-link to="/Book"></router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="idcard" />
        <span>Reader</span>
        <router-link to="/Reader"></router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="user" />
        <span>Author</span>
        <router-link to="/Author"></router-link>
      </a-menu-item>
      <a-menu-item key="5">
        <a-icon type="global" />
        <span>City</span>
        <router-link to="/City"></router-link>
      </a-menu-item>
      <a-menu-item key="6">
        <a-icon type="book" />
        <span>Edition</span>
        <router-link to="/Edition"></router-link>
      </a-menu-item>
      <a-menu-item key="7">
        <a-icon type="home" />
        <span>Library</span>
        <router-link to="/Library"></router-link>
      </a-menu-item>
      <a-menu-item key="8">
        <a-icon type="team" />
        <span>Publisher</span>
        <router-link to="/Publisher"></router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { Menu, Button, Icon } from "ant-design-vue";

export default {
  components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-menu-item-group": Menu.ItemGroup,
    "a-button": Button,
    "a-icon": Icon
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style>
h2 {
  text-align: center;
  padding-top: 10px;
}
</style>