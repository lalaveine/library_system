 <template>
  <div class="component">
    <h1>Journal</h1>
    <hr />
    <div class="content">
      <a-form
        :form="inputForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleInputSubmit"
      >
        <h3>Input</h3>
        <a-form-item label="Reader ID:">
          <a-input-number
            v-decorator="['reader_id', { rules: [{ required: true, message: 'Please input reader`s ID' }] }]"
            placeholder="Input reader`s ID"
          />
        </a-form-item>

        <a-form-item label="Edition ID:">
          <a-input-number
            v-decorator="['edition_id', { rules: [{ required: true, message: 'Please input edition`s ID' }] }]"
            placeholder="Input edition`s ID"
          />
        </a-form-item>

        <a-form-item label="Return date:">
          <a-date-picker
            v-decorator="['return_date', { rules: [{ required: true, message: 'Please input return date' }] }]"
            placeholder="Input return date"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 6, offset: 3 }">
          <div class="buttons">
          <div class="buttons"><a-button type="primary" html-type="submit">Submit</a-button></div>
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
        <a-form-item label="Reader ID:">
          <a-input-number v-decorator="['reader-reader_id']" placeholder="Input reader id" />
        </a-form-item>

        <a-form-item label="Name:">
          <a-input v-decorator="['reader_name']" placeholder="Input book" />
        </a-form-item>

        <a-form-item label="Middle name:">
          <a-input v-decorator="['reader_mid_name']" placeholder="Input middle name" />
        </a-form-item>

        <a-form-item label="Surname:">
          <a-input v-decorator="['reader_surname']" placeholder="Input Surname" />
        </a-form-item>

        <a-form-item label="Edition ID:">
          <a-input-number v-decorator="['edition_id']" placeholder="Input edition id" />
        </a-form-item>

        <a-form-item label="Title:">
          <a-input v-decorator="['book_title']" placeholder="Input title" />
        </a-form-item>

        <a-form-item label="Take date:">
          <a-date-picker v-decorator="['take_date']" placeholder="Input take date" />
        </a-form-item>

        <a-form-item label="Return date:">
          <a-date-picker v-decorator="['return_date']" placeholder="Input return date" />
        </a-form-item>

        <a-form-item label="Returned">
          <a-checkbox v-decorator="['returned']" :defaultChecked="false" />
        </a-form-item>

        <a-form-item label="Nor returned">
          <a-checkbox v-decorator="['not_returned']" :defaultChecked="false" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 6, offset: 3 }">
          <div class="buttons">
          <a-button type="primary" html-type="submit" :disabled="getButtonDisabled()">Search</a-button>
          <a-button type="danger" @click="resetSearch()">Reset</a-button>
          </div>
        </a-form-item>
      </a-form>
    </div>
    <div>
      <journal-update-form
        ref="editForm"
        :visible="visible"
        v-bind="fields"
        @cancel="handleCancel"
        @update="handleUpdateSubmit"
        @change="handleFormChange"
      />
    </div>
    <!-- Table Custom Render -->
    <a-table :columns="columns" :data-source="data" rowKey="entry_id">
      <span class="action-buttons" slot="action" slot-scope="text, record">
        <a-button
          type="danger"
          @click="showDeleteConfirm(record.entry_id, getData, openNotificationWithIcon)"
        >Delete</a-button>
        <a-button type="primary" @click="showUpdateModal(record)">Edit</a-button>
      </span>
      <span slot="take_date" slot-scope="text, record">
        <span v-html="dateCustomRender(record.take_date)"></span>
      </span>
      <span slot="return_date" slot-scope="text, record">
        <span v-html="dateCustomRender(record.return_date)"></span>
      </span>
      <span slot="returned" slot-scope="text, record">
        <a-checkbox :checked="record.returned" disabled />
      </span>
    </a-table>
    <!-- End Table Custom Render -->
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import {
  Button,
  Form,
  Input,
  Table,
  Modal,
  DatePicker,
  InputNumber,
  Checkbox,
  notification
} from "ant-design-vue";
import { journalColumns as columns, dateFormat } from "@/constants.js";
import JournalUpdateForm from "./JournalUpdateForm.vue";

export default {
  name: "Journal",
  components: {
    "a-button": Button,
    "a-form": Form,
    "a-input": Input,
    "a-input-number": InputNumber,
    "a-form-item": Form.Item,
    "a-table": Table,
    "a-date-picker": DatePicker,
    "a-modal": Modal,
    "a-checkbox": Checkbox,
    "journal-update-form": JournalUpdateForm
  },
  data() {
    return {
      formLayout: "horizontal",
      searchForm: this.$form.createForm(this, { name: "journalSearchForm" }),
      inputForm: this.$form.createForm(this, { name: "journalInputForm" }),
      data: [],
      columns,
      dateFormat,
      visible: false,
      isButtonDisabled: true,
      fields: {}
    };
  },
  methods: {
    async getData() {
      await axios.get(`/journal`).then(response => {
        const { data } = response;
        this.data = data;
        console.log(data)
      });
    },
    handleSearchSubmit(e) {
      e.preventDefault();
      this.searchForm.validateFields(async (err, values) => {
        if (!err) {
          (async () => { let link = "/journal?";
          if (values["take_date"]) {
            values["take_date"] = moment(new Date(values["take_date"]).setHours(12, 0, 0)).toISOString();
          }
          if (values["return_date"]) {
            values["return_date"] = moment(new Date(values["return_date"]).setHours(12, 0, 0)).toISOString();
          }
          if (values['not_returned']) {
            values['returned'] = false;
            delete values['not_returned'];
          }
          
          for (let key in values) {
            if (values[key] != undefined) {
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
    async handleInputSubmit(e) {
      e.preventDefault();
      this.inputForm.validateFields(async (err, values) => {
        values["take_date"] = moment(new Date().setHours(12, 0, 0)).toISOString();
        values["return_date"] = moment(
          new Date(values["return_date"]).setHours(12, 0, 0)
        ).toISOString();
        console.log(values);
        if (!err) {
          await axios
            .post("/journal", Object.values(values))
            .then(res => {
              this.openNotificationWithIcon(
                "success",
                "Success",
                "Journal entry is added!"
              );
            })
            .catch(err => {
              this.openNotificationWithIcon(
                "error",
                "Error",
                err.response.data.detail
              );
            })
            .then(() => this.getData());
        }
      });
    },
    resetSearch() {
      this.searchForm.resetFields();
      this.getData();
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
        values["take_date"] = moment(
          new Date(values["take_date"]).setHours(12, 0, 0)
        ).toISOString();
        values["return_date"] = moment(
          new Date(values["return_date"]).setHours(12, 0, 0)
        ).toISOString();
        console.log(values);
        if (!err) {
          (async () =>
            await axios
              .put(
                `/journal/${values.entry_id}`,
                Object.values(values)
              )
              .then(res =>
                this.openNotificationWithIcon(
                  "success",
                  "Success",
                  "Journal entry is updated!"
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
            .delete(`/journal/${id}`)
            .then(res =>
              openNotificationWithIcon(
                "success",
                "Success",
                "Journal entry is deleted!"
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
    dateCustomRender(dateString) {
      return moment(dateString).format(dateFormat);
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