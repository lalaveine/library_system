 <template>
  <div class="component">
    <h1>Reader</h1>
    <hr />
    <div class="content">
      <a-form
        :form="inputForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleInputSubmit"
      >
        <h3>Input</h3>
        <a-form-item label="Reader name:">
          <a-input
            v-decorator="['reader_name', { rules: [{ required: true, message: 'Please input Reader name' }] }]"
            placeholder="Input Reader name"
          />
        </a-form-item>

        <a-form-item label="Middle name:">
          <a-input
            v-decorator="['reader_mid_name', { rules: [{ required: true, message: 'Please input middle name' }] }]"
            placeholder="Input reader`s middle name"
          />
        </a-form-item>

        <a-form-item label="Surname:">
          <a-input
            v-decorator="['reader_surname', { rules: [{ required: true, message: 'Please input surname' }] }]"
            placeholder="Input surname"
          />
        </a-form-item>

        <a-form-item label="E-mail:">
          <a-input
            v-decorator="['reader_email', { rules: [{ required: true, message: 'Please input email' }] }]"
            placeholder="Input email"
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
        <a-form-item label="Reader ID:">
          <a-input-number :min="0" v-decorator="['reader_id']" placeholder="Input reader id" />
        </a-form-item>

        <a-form-item label="Reader name:">
          <a-input v-decorator="['reader_name']" placeholder="Input reader" />
        </a-form-item>

        <a-form-item label="Middle name:">
          <a-input v-decorator="['reader_mid_name']" placeholder="Input middle name" />
        </a-form-item>

        <a-form-item label="Surname:">
          <a-input v-decorator="['reader_surname']" placeholder="Input Surname" />
        </a-form-item>

        <a-form-item label="E-mail:">
          <a-input v-decorator="['reader_email']" placeholder="Input tittle" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 6, offset: 3 }">
          <div class="buttons">
            <a-button type="primary" html-type="submit" :disabled=" getButtonDisabled()">Search</a-button>
            <a-button type="danger" @click="resetSearch()">Reset</a-button>
          </div>
        </a-form-item>
      </a-form>
    </div>
    <reader-update-form
      ref="editForm"
      :visible="visible"
      v-bind="fields"
      @cancel="handleCancel"
      @update="handleUpdateSubmit"
      @change="handleFormChange"
    />
    <a-table :columns="columns" :data-source="data" rowKey="reader_id">
      <span class="action-buttons" slot="action" slot-scope="text, record">
        <a-button
          type="danger"
          @click="showDeleteConfirm(record.reader_id, getData, openNotificationWithIcon)"
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
import { readerColumns as columns, dateFormat } from "@/constants.js";
import ReaderUpdateForm from "./ReaderUpdateForm.vue";

export default {
  name: "BookSearch",
  components: {
    "a-button": Button,
    "a-form": Form,
    "a-input": Input,
    "a-input-number": InputNumber,
    "a-form-item": Form.Item,
    "a-table": Table,
    "a-date-picker": DatePicker,
    "reader-update-form": ReaderUpdateForm
  },
  data() {
    return {
      formLayout: "horizontal",
      searchForm: this.$form.createForm(this, { name: "readerSearch" }),
      inputForm: this.$form.createForm(this, { name: "readerInput" }),
      data: [],
      columns,
      visible: false,
      isButtonDisabled: true,
      fields: {}
    };
  },
  methods: {
    async getData() {
      await axios.get(`/readers`).then(response => {
        const { data } = response;
        this.data = data;
      });
    },
    handleSearchSubmit(e) {
      e.preventDefault();
      this.searchForm.validateFields(async (err, values) => {
        if (!err) {
          (async () => {
            let link = "/readers?";
            for (let key in values) {
              if (values[key]) {
                link += `${key}=${values[key]}&`;
              }
            }
          link = link.slice(0, -1);
          const response = await axios.get(link, values)
            .catch(() =>
              this.openNotificationWithIcon(
                "warning",
                "Warning",
                "Reader is not found."
              )
            );
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
          axios
            .post("/readers", Object.values(values))
            .then(res =>
              this.openNotificationWithIcon(
                "success",
                "Success",
                "Reader is added!"
              )
            )
            .catch(err =>
              this.openNotificationWithIcon(
                "error",
                "Error",
                err.response.data.detail
              )
            );
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
                `/readers/${values.reader_id}`,
                Object.values(values)
              )
              .then(res =>
                this.openNotificationWithIcon(
                  "success",
                  "Success",
                  "Reader is updated!"
                )
              )
              .catch(err =>
                this.openNotificationWithIcon(
                  "error",
                  "Error",
                  err.response.data.detail
                )
              ))();
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
            .delete(`/readers/${id}`)
            .then(res =>
              openNotificationWithIcon(
                "success",
                "Success",
                "Reader is deleted!"
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
    resetSearch() {
      this.searchForm.resetFields();
      this.getData();
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
