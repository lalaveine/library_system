 <template>
  <div class="component">
    <h1>Book</h1>
    <hr />
    <div class="content">
      <a-form
        :form="inputForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleInputSubmit"
      >
        <h3>Input</h3>

        <a-form-item label="Title:">
          <a-input
            v-decorator="['book_title', { rules: [{ required: true, message: 'Please input title' }] }]"
            placeholder="Input reader`s middle name"
          />
        </a-form-item>
        <a-form-item label="ISBN:">
          <a-input
            v-decorator="['isbn', { rules: [{ required: true, message: 'Please input book id' }] }]"
            placeholder="Input book"
          />
        </a-form-item>

        <a-form-item label="Bbk:">
          <a-input
            v-decorator="['bbk', { rules: [{ required: true, message: 'Please input bbk' }] }]"
            placeholder="Input bbk"
          />
        </a-form-item>
        <a-form-item label="Publisher name:">
          <a-input
            v-decorator="['publisher_name', { rules: [{ required: true, message: 'Please input book id' }] }]"
            placeholder="Input book"
          />
        </a-form-item>
        <a-form-item label="Publisher year:">
          <a-input
            v-decorator="['pub_year', { rules: [{ required: true, message: 'Please input book id' }] }]"
            placeholder="Input book"
          />
        </a-form-item>
        <h3>Author 1:</h3>
        <a-form-item label="Author Surname:">
          <a-input
            v-decorator="['1author_surname', { rules: [{ required: true, message: 'Please input author surname' }] }]"
            placeholder="Input author surname"
          />
        </a-form-item>

        <a-form-item label="Author Name:">
          <a-input
            v-decorator="['1author_name', { rules: [{ required: true, message: 'Please input author name' }] }]"
            placeholder="Input author name"
          />
        </a-form-item>

        <a-form-item label="Author Middle Name:">
          <a-input
            v-decorator="['1author_mid_name', { rules: [{ required: true, message: 'Please input author middle name' }] }]"
            placeholder="Input author middle name"
          />
        </a-form-item>
        <a-form-item v-for="k in inputForm.getFieldValue('keys')" :key="k" :required="false">
          <div class="author-label">
            <a-icon
              v-if="inputForm.getFieldValue('keys').length > 0"
              class="dynamic-delete-button"
              type="minus-circle-o"
              @click="() => remove(k)"
            />
            <h3>Author {{k}}:</h3>
          </div>
          <a-form-item label="Author Surname:">
            <a-input
              v-decorator="[`${k}author_surname`, { rules: [{ required: true, message: 'Please input author surname' }] }]"
              placeholder="Input author surname"
            />
          </a-form-item>

          <a-form-item label="Author Name:">
            <a-input
              v-decorator="[`${k}author_name`, { rules: [{ required: true, message: 'Please input author name' }] }]"
              placeholder="Input author name"
            />
          </a-form-item>

          <a-form-item label="Author Middle Name:">
            <a-input
              v-decorator="[`${k}author_mid_name`, { rules: [{ required: true, message: 'Please input author middle name' }] }]"
              placeholder="Input author middle name"
            />
          </a-form-item>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 6, offset: 3 }">
          <div class="buttons">
            <a-button type="dashed" @click="add">
              <a-icon type="plus" />Add author
            </a-button>
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
        <a-form-item label="Book title:">
          <a-input v-decorator="['book_title']" placeholder="Input book" />
        </a-form-item>

        <a-form-item label="ISBN:">
          <a-input v-decorator="['isbn']" placeholder="Input ISBN" />
        </a-form-item>

        <a-form-item label="Bbk:">
          <a-input v-decorator="['bbk']" placeholder="Input bbk" />
        </a-form-item>
        <a-form-item label="Author name:">
          <a-input v-decorator="['author_name']" placeholder="Input author name" />
        </a-form-item>

        <a-form-item label="Author middle name:">
          <a-input v-decorator="['author_mid_name']" placeholder="Input author middle name" />
        </a-form-item>

        <a-form-item label="Author surname:">
          <a-input v-decorator="['author_surname']" placeholder="Input author surname" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 6, offset: 3 }">
          <div class="buttons">
            <a-button type="primary" html-type="submit" :disabled="getButtonDisabled()">Search</a-button>
          </div>
        </a-form-item>
      </a-form>
    </div>
    <book-update-form
      ref="editForm"
      :visible="visible"
      v-bind="fields"
      @cancel="handleCancel"
      @update="handleUpdateSubmit"
      @change="handleFormChange"
    />
    <a-table :columns="columns" :data-source="data" rowKey="book_id">
      <span slot="authors" slot-scope="text, record">
        <span v-for="(item, index) in record.authors" :key="index">
          <p>{{ item }}</p>
        </span>
      </span>
      <span class="action-buttons" slot="action" slot-scope="text, record">
        <a-button
          type="danger"
          @click="showDeleteConfirm(record.book_id, getData, openNotificationWithIcon)"
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
  notification,
  Icon
} from "ant-design-vue";
import { bookColumns as columns, dateFormat } from "@/constants.js";
import BookUpdateForm from "./BookUpdateForm.vue";
import _ from "lodash";
let id = 2;

export default {
  name: "BookSearch",
  components: {
    "a-button": Button,
    "a-form": Form,
    "a-input": Input,
    "a-form-item": Form.Item,
    "a-table": Table,
    "a-date-picker": DatePicker,
    "book-update-form": BookUpdateForm,
    "a-icon": Icon
  },
  data() {
    return {
      formLayout: "horizontal",
      searchForm: this.$form.createForm(this, { name: "BookSearch" }),
      inputForm: this.$form.createForm(this, { name: "BookInput" }),
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
      await axios.get(`http://localhost:5000/books`).then(response => {
        const { data } = response;
        this.data = data;
      });
    },
    handleSearchSubmit(e) {
      e.preventDefault();
      this.searchForm.validateFields(async (err, values) => {
        if (!err) {
          let link = "http://localhost:5000/books?";
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
        }
      });
    },
    handleInputSubmit(e) {
      e.preventDefault();
      this.inputForm.validateFields((err, values) => {
        if (!err) {
          let { keys } = values;
          keys = [1, ...keys];
          const key = Object.keys(values);
          let authors = [];

          for (let i in keys) {
            authors[`author${i}`] = {};
            let filtered = key.filter(e => e.toString().includes(`${i}`));
            let arr = [];
            for (let j of filtered) {
              authors[`author${i}`][j.toString().slice(1)] = values[j];
            }
          }
          let { book_title, bbk, pub_year, publisher_name, isbn } = values;
          const data = {
            book_title,
            isbn,
            bbk,
            publisher_name,
            pub_year,
            authors: { ...authors }
          };

          (async () =>
            axios
              .post("http://localhost:5000/books", data)
              .then(res =>
                this.openNotificationWithIcon(
                  "success",
                  "Success",
                  "Publisher is added!"
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
        let { keys } = values;
        const key = Object.keys(values);
        let authors = [];
     console.log(values)
        for (let i in keys) {
          authors[`author${i}`] = {};
          let filtered = key.filter(e => e.toString().includes(`${i}`));
          let arr = [];
          for (let j of filtered) {
            authors[`author${i}`][j.toString().slice(1)] = values[j];
          }
        }
        let { book_title, bbk, pub_year, publisher_name, isbn } = values;
        const data = {
          book_title,
          isbn,
          bbk,
          publisher_name,
          pub_year,
          authors: { ...authors }
        };
   
        if (!err) {
          (async () =>
            await axios
              .put(`http://localhost:5000/books/${values.publisher_id}`, data)
              .then(res =>
                this.openNotificationWithIcon(
                  "success",
                  "Success",
                  "Book is updated!"
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
            .delete(`http://localhost:5000/books/${id}`)
            .then(res =>
              openNotificationWithIcon("success", "Success", "Book is deleted!")
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
    },
    add() {
      // can use data-binding to get
      const keys = this.inputForm.getFieldValue("keys");
      const nextKeys = keys.concat(id++);
      // can use data-binding to set
      // important! notify form to detect changes
      this.inputForm.setFieldsValue({
        keys: nextKeys
      });
    },
    remove(k) {
      // can use data-binding to get
      const keys = this.inputForm.getFieldValue("keys");
      // We need at least one passenger
      if (keys.length === 0) {
        return;
      }

      // can use data-binding to set
      this.inputForm.setFieldsValue({
        keys: keys.filter(key => key !== k)
      });
      // this.inputForm.resetFields();
    }
  },
  async mounted() {
    await this.getData();
    this.inputForm.getFieldDecorator("keys", {
      initialValue: [],
      preserve: true
    });
  }
};
</script>

<style scoped>
.author-label {
  display: flex;
  flex-direction: row;
}

.dynamic-delete-button {
  line-height: 3;
}
</style>
