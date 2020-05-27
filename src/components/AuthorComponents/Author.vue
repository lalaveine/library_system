 <template>
  <div class="component">
    <h1>Author</h1>
    <hr />
    <div class="content">
      <a-form
        :form="inputForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleInputSubmit"
      >
        <h3>Input</h3>
        <a-form-item label="Name:">
          <a-input
            v-decorator="['author_name', { rules: [{ required: true, message: 'Please input author`s name' }] }]"
            placeholder="Input author`s name"
          />
        </a-form-item>

        <a-form-item label="Middle name:">
          <a-input
            v-decorator="['author_mid_name', { rules: [{ message: 'Please input author`s middle surname' }] }]"
            placeholder="Input author`s middle name"
          />
        </a-form-item>

        <a-form-item label="Surname:">
          <a-input
            v-decorator="['author_surname', { rules: [{ required: true, message: 'Please input author`s surname' }] }]"
            placeholder="Input author`s surname"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 6, offset: 3 }">
          <div class="buttons">
            <a-button type="primary" html-type="submit">Submit</a-button>
          </div>
        </a-form-item>
      </a-form>
      <hr />

      <a-form
        :form="searchForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleSearchSubmit"
      >
        <h3>Search</h3>
        <a-form-item label="Name:">
          <a-input v-decorator="['author_name']" placeholder="Input book" />
        </a-form-item>

        <a-form-item label="Middle name:">
          <a-input v-decorator="['author_mid_name']" placeholder="Input middle name" />
        </a-form-item>

        <a-form-item label="Surname:">
          <a-input v-decorator="['author_surname']" placeholder="Input Surname" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 6, offset: 3 }">
          <div class="buttons">
            <a-button type="primary" html-type="submit" :disabled=" getButtonDisabled()">Search</a-button>
            <a-button type="danger" @click="resetSearch()">Reset</a-button>
          </div>
        </a-form-item>
      </a-form>
    </div>
    <author-update-form
      ref="editForm"
      :visible="visible"
      v-bind="fields"
      @cancel="handleCancel"
      @update="handleUpdateSubmit"
      @change="handleFormChange"
    />
    <a-table :columns="columns" :data-source="data" rowKey="author_id">
      <span class="action-buttons" slot="action" slot-scope="text, record">
        <a-button
          type="danger"
          @click="showDeleteConfirm(record.author_id, getData, openNotificationWithIcon)"
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
  DatePicker,
  InputNumber,
  notification
} from "ant-design-vue";
import { authorColumns as columns, dateFormat } from "@/constants.js";
import AuthorUpdateForm from "./AuthorUpdateForm.vue";

export default {
  name: "Author",
  components: {
    "a-button": Button,
    "a-form": Form,
    "a-input": Input,
    "a-form-item": Form.Item,
    "a-table": Table,
    "a-date-picker": DatePicker,
    "author-update-form": AuthorUpdateForm
  },
  data() {
    return {
      formLayout: "horizontal",
      searchForm: this.$form.createForm(this, { name: "authorSearch" }),
      inputForm: this.$form.createForm(this, { name: "authorInput" }),
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
      await axios.get(`http://localhost:5000/authors`).then(response => {
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
          console.log(values);
          (async () => { let link = "http://localhost:5000/authors?";
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
          (async () =>
            axios
              .post("http://localhost:5000/authors", Object.values(values))
              .then(res =>
                this.openNotificationWithIcon(
                  "success",
                  "Success",
                  "Author is added!"
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
        console.log(values);
        if (!err) {
          (async () =>
            await axios
              .put(
                `http://localhost:5000/authors/${values.author_id}`,
                Object.values(values)
              )
              .then(res =>
                this.openNotificationWithIcon(
                  "success",
                  "Success",
                  "Author is updated!"
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
    showDeleteConfirm(id, getData, openNotificationWithIcon) {
      Modal.confirm({
        title: "Are you sure delete this task?",
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        async onOk() {
          await axios
            .delete(`http://localhost:5000/authors/${id}`)
            .then(res =>
              openNotificationWithIcon(
                "success",
                "Success",
                "Author is deleted!"
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
