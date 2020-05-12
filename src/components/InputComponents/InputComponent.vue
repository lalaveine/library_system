<template>
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Reader Input">
        <ReaderInput />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Book Input">
        <BookInput />
      </a-tab-pane>
      <a-tab-pane key="3" tab="Author Input">
        <AuthorInput />
      </a-tab-pane>
      <a-tab-pane key="4" tab="Library Input">
        <LibraryInput />
      </a-tab-pane>
      <a-tab-pane key="5" tab="Publisher Input">
        <PublisherInput />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import ReaderInput from "@/components/InputComponents/ReaderInput.vue";
import BookInput from "@/components/InputComponents/BookInput.vue";

import { Tabs } from "ant-design-vue";

export default {
  components: {
    "a-tabs": Tabs,
    "a-tab-pane": Tabs.TabPane,
    ReaderInput,
    BookInput
  }
};
</script>