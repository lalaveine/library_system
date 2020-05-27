 <template>
  <div class="component">
    <h1>Edition</h1>
    <hr />
    <div class="content">
      <a-form
        :form="inputForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleInputSubmit"
      >
        <h3>Input</h3>

        <a-form-item label="Book Title:">
          <a-input
            v-decorator="['book_title', { rules: [{ required: true, message: 'Please input book title' }] }]"
            placeholder="Input book title"
          />
        </a-form-item>

        <a-form-item label="Library:">
          <a-input
            v-decorator="['library_name', { rules: [{ required: true, message: 'Please input library name' }] }]"
            placeholder="library"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 6, offset: 3 }">
          <div class="buttons">
            <a-button type="primary" html-type="submit">Submit</a-button>
          </div>
        </a-form-item>
      </a-form>

      <a-form
        :form="searchForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleSearchSubmit"
      >
        <h3>Search</h3>

        <a-form-item label="Edition ID:">
          <a-input-number v-decorator="['edition_id']" placeholder="Input edition id" />
        </a-form-item>

        <a-form-item label="Book Title:">
          <a-input v-decorator="['book-book_title']" placeholder="Input book title" />
        </a-form-item>

        <a-form-item label="Library:">
          <a-input v-decorator="['library-library_name']" placeholder="library" />
        </a-form-item>

        <a-form-item label="Taken">
          <a-checkbox v-decorator="['taken']" :defaultChecked="false" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 6, offset: 3 }">
          <div class="buttons">
            <a-button type="primary" html-type="submit" :disabled=" getButtonDisabled()">Search</a-button>
            <a-button type="danger" @click="resetSearch()">Reset</a-button>
          </div>
        </a-form-item>
      </a-form>
    </div>
    <edition-update-form
      ref="editForm"
      :visible="visible"
      v-bind="fields"
      @cancel="handleCancel"
      @update="handleUpdateSubmit"
      @change="handleFormChange"
    />
    <a-table :columns="columns" :data-source="data" rowKey="edition_id">
      <span slot="taken" slot-scope="text, record">
        <a-checkbox :checked="record.taken" disabled />
      </span>
      <span class="action-buttons" slot="action" slot-scope="text, record">
        <a-button
          type="danger"
          @click="showDeleteConfirm(record.edition_id, getData, openNotificationWithIcon)"
        >Delete</a-button>
        <a-button type="primary" @click="showUpdateModal(record)">Edit</a-button>
      </span>
    </a-table>
  </div>
</template>

<script>
import axios from "axios";

import {
  Button,
  Form,
  Input,
  Table,
  Modal,
  InputNumber,
  Checkbox,
  notification
} from "ant-design-vue";
import { editionsColumns as columns, dateFormat } from "@/constants.js";
import EditionUpdateForm from "./EditionUpdateForm.vue";

export default {
  name: "EditionSearch",
  components: {
    "a-button": Button,
    "a-form": Form,
    "a-input": Input,
    "a-input-number": InputNumber,
    "a-form-item": Form.Item,
    "a-table": Table,
    "a-checkbox": Checkbox,
    "edition-update-form": EditionUpdateForm
  },
  data() {
    return {
      formLayout: "horizontal",
      searchForm: this.$form.createForm(this, { name: "editionSearch" }),
      inputForm: this.$form.createForm(this, { name: "editionInput" }),
      data: [],
      columns,
      visible: false,
      isButtonDisabled: true,
      fields: {},
      dateFormat
    };
  },
  methods: {
    async getData() {
      await axios.get(`/editions`).then(response => {
        const { data } = response;
        this.data = data;
      });
    },
    resetSearch() {
      this.searchForm.resetFields();
      this.getData();
    },
    handleSearchSubmit(e) {
      e.preventDefault();
      this.searchForm.validateFields(async (err, values) => {
        if (!err) {
          (async () => { let link = "/editions?";
          for (let key in values) {
            if (values[key]) {
              link += `${key}=${values[key]}&`;
            }
          }
          link = link.slice(0, -1);
          const response = await axios.get(link, values).catch(err => {
            this.openNotificationWithIcon(
              "warning",
              "Warning",
              err.response.data
            );
          });
          if (response) {
            let { data } = response;
            this.data = data;
          } else {
            this.data = [];
          }
        })();
        }
      });
    },
    handleInputSubmit(e) {
      e.preventDefault();
      this.inputForm.validateFields(async (err, values) => {
        if (!err) {
          console.log(values);
          (async () =>
            await axios
              .post("/editions", values)
              .then(res =>
                this.openNotificationWithIcon(
                  "success",
                  "Success",
                  "Edition is added!"
                )
              )
              .catch(err =>
                this.openNotificationWithIcon(
                  "error",
                  "Error",
                  err.response.data.detail
                )
              )
              .then(() => {
                this.getData();
              }))();
          this.inputForm.resetFields();
        }
      });
    },
    showUpdateModal(record) {
      this.visible = true;
      this.fields = { ...record };
    },
    handleCancel() {
      this.visible = false;
      this.fields = {};
    },
    handleUpdateSubmit() {
      const form = this.$refs.editForm.form;
      form.validateFields((err, values) => {
        if (!err) {
          (async () =>
            await axios
              .put(
                `/editions/${values.edition_id}`,
                values
              )
              .then(res =>
                this.openNotificationWithIcon(
                  "success",
                  "Success",
                  "Edition is updated!"
                )
              )
              .catch(err =>
                this.openNotificationWithIcon(
                  "error",
                  "Error",
                  err.response.data.detail
                )
              )
              .then(() => this.getData()))();
        }
        form.resetFields();
        this.visible = false;
        this.fields = {};
      });
    },
    openNotificationWithIcon(type, message, description) {
      notification[type]({
        message: message,
        description: description
      });
    },
    handleFormChange(changedFields) {
      this.fields = { ...this.fields, changedFields };
    },
    async showDeleteConfirm(id, getData, openNotificationWithIcon) {
      Modal.confirm({
        title: "Are you sure delete this task?",
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        async onOk() {
          await axios
            .delete(`/editions/${id}`)
            .then(res =>
              openNotificationWithIcon(
                "success",
                "Success",
                "Edition is deleted!"
              )
            )
            .catch(err =>
              openNotificationWithIcon(
                "error",
                "Error",
                err.response.data.detail
              )
            )
            .then(() => getData());
        }
      });
    },
    getButtonDisabled() {
      const fields = this.searchForm.getFieldsValue();
      const keys = Object.keys(this.searchForm.getFieldsValue());
      for (let key of keys) {
        if (
          (key !== "copies" && fields[key]) ||
          (key === "copies" && typeof fields[key] === "number")
        ) {
          return false;
        }
      }
      return true;
    }
  },
  async mounted() {
    await this.getData();
  }
};
</script>
