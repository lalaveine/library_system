 <template>
  <div class="component">
    <h1>Publisher</h1>
    <hr />
    <div class="content">
      <a-form
        :form="inputForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleInputSubmit"
      >
        <h3>Input</h3>
        <a-form-item label="Name:">
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: 'Please input publisher`s name' }] }]"
            placeholder="Input publisher`s name"
          />
        </a-form-item>

        <a-form-item label="City :">
          <a-input
            v-decorator="['city_id', { rules: [{ required: true, message: 'Please input city' }] }]"
            placeholder="Input city"
          />
        </a-form-item>

        <a-form-item label="Email:">
          <a-input
            v-decorator="['email', { rules: [{ required: true, message: 'Please input email' }] }]"
            placeholder="Input email"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
      <hr />

      <a-form
        :form="searchForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleSearchSubmit"
      >
      
        <h3>Search</h3>
        <a-form-item label="Name:">
          <a-input v-decorator="['name']" placeholder="Input publisher's name" />
        </a-form-item>

        <a-form-item label="City ID:">
          <a-input v-decorator="['city_id']" placeholder="Input city" />
        </a-form-item>

        <a-form-item label="Email:">
          <a-input v-decorator="['email']" placeholder="Input email" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit" :disabled=" getButtonDisabled()">Search</a-button>
        </a-form-item>
      </a-form>
    </div>
    <publisher-update-form
        ref="editForm"
        :visible="visible"
        v-bind="fields"
        @cancel="handleCancel"
        @update="handleUpdateSubmit"
        @change="handleFormChange"
      />
    <a-table :columns="columns" :data-source="data"> 
      <span class="action-buttons" slot="action" slot-scope="text, record">
        <a-button type="danger" @click="showDeleteConfirm(record.publisher_id)">Delete</a-button>
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
import { publisherColumns as columns, dateFormat } from "@/constants.js";
import PublisherUpdateForm from './PublisherUpdateForm.vue';

export default {
  name: "PublisherSearch",
  components: {
    "a-button": Button,
    "a-form": Form,
    "a-input": Input,
    "a-form-item": Form.Item,
    "a-table": Table,
    "a-date-picker": DatePicker,
    "publisher-update-form": PublisherUpdateForm
  },
  data() {
    return {
      formLayout: "horizontal",
      searchForm: this.$form.createForm(this, { name: "publisherSearch" }),
      inputForm: this.$form.createForm(this, { name: "publisherInput" }),
      data: [],
      columns,
      visible: false,
      isButtonDisabled: true,
      fields: {},
      dateFormat,
    };
  },
  methods: {
    handleSearchSubmit(e) {
      e.preventDefault();
      this.searchForm.validateFields(async (err, values) => {
        if (!err) {
          console.log(values);
          let link = "http://localhost:5000/publishers";
          for (let key in values) {
            if (values[key]) {
              link += `${key}=${values[key]}&`;
            }
          }
          link = link.slice(0, -1);

          const response = await axios.get(link, values);
          const { data } = response;
          this.data = data;
        }
      });
    },
    handleInputSubmit(e) {
      e.preventDefault();
      this.inputForm.validateFields(async (err, values) => {
        if (!err) {
          axios.post("http://localhost:5000/publisher", Object.values(values));
          console.log(values);
        }
      });
    },
        showUpdateModal(record) {
      // console.log(record);
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
                `http://localhost:5000/publishers/${values.publisher_id}`,
                Object.values(values)
              )
              .then(res => this.openNotificationWithIcon('success', 'Success', 'Publisher is updated!'))
              .catch(err => this.openNotificationWithIcon('error', 'Error', err.response.data.detail)))();
              // .catch(err => this.openNotificationWithIcon('error', 'Error', err.response.data.detail)))();
        }
        // console.log("Received values of form: ", values);
        form.resetFields();
        //this.fields = record;
        // console.log(this.record);
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
    showDeleteConfirm(id) {
      Modal.confirm({
        title: "Are you sure delete this task?",
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        async onOk() {
          await axios
            .delete(`http://localhost:5000/publishers/${id}`);
        },
        onCancel() {
          console.log("Cancel");
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
    await axios.get(`http://localhost:5000/publishers`).then(response => {
      const { data } = response;
      this.data = data;
      console.log(this.data);
    });
  }
};
</script>