<template>
  <div style="menu" >
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
      style="height: 100%"
      :default-selected-keys="['1']"
      mode="inline"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>Journal</span>
        <router-link to="/">Journal</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="pie-chart" />
        <span>Book</span>
        <router-link to="/Book">Book</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="pie-chart" />
        <span>Reader</span>
        <router-link to="/Reader">Reader</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="pie-chart" />
        <span>Author</span>
        <router-link to="/Author">Author</router-link>
      </a-menu-item>
      <a-menu-item key="5">
        <a-icon type="pie-chart" />
        <span>City</span>
        <router-link to="/City">City</router-link>
      </a-menu-item>
      <a-menu-item key="6">
        <a-icon type="pie-chart" />
        <span>Edition</span>
        <router-link to="/Edition">Editios</router-link>
      </a-menu-item>
      <a-menu-item key="7">
        <a-icon type="pie-chart" />
        <span>Library</span>
        <router-link to="/Library">Library</router-link>
      </a-menu-item>
      <a-menu-item key="8">
        <a-icon type="pie-chart" />
        <span>Publisher</span>
        <router-link to="/Publisher">Publisher</router-link>
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