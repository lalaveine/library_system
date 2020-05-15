<template>
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Book search">
        <BookSearch />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Reader search" force-render>
        <ReaderSearch />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import BookSearch from "@/components/SearchComponents/BookSearch.vue";
import ReaderSearch from "@/components/SearchComponents/ReaderSearch.vue";

import { Tabs } from "ant-design-vue";

export default {
  components: {
    "a-tabs": Tabs,
    "a-tab-pane": Tabs.TabPane,
    BookSearch,
    ReaderSearch
  }
};
</script>