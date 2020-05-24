 <template>
  <div class="component">
    <h1>Book</h1>
    <hr />
    <div class="content">
      <a-form
        :form="inputForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleInputSubmit"
      >
        <h3>Input</h3>
        <a-form-item label="Book name:">
          <a-input
            v-decorator="['book_id', { rules: [{ required: true, message: 'Please input book id' }] }]"
            placeholder="Input book"
          />
        </a-form-item>

        <a-form-item label="Title:">
          <a-input
            v-decorator="['title', { rules: [{ required: true, message: 'Please input title' }] }]"
            placeholder="Input reader`s middle name"
          />
        </a-form-item>

        <a-form-item label="Bbk:">
          <a-input
            v-decorator="['bbk', { rules: [{ required: true, message: 'Please input bbk' }] }]"
            placeholder="Input bbk"
          />
        </a-form-item>

        <a-form-item label="Author Surname:">
          <a-input
            v-decorator="['author_surname', { rules: [{ required: true, message: 'Please input author surname' }] }]"
            placeholder="Input author surname"
          />
        </a-form-item>
        <a-form-item label="Author Name:">
          <a-input
            v-decorator="['author_name', { rules: [{ required: true, message: 'Please input author name' }] }]"
            placeholder="Input author name"
          />
        </a-form-item>
        <a-form-item label="Author Middle Name:">
          <a-input
            v-decorator="['author_middle_name', { rules: [{ required: true, message: 'Please input author middle name' }] }]"
            placeholder="Input author middle name"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>

      <a-form
        :form="searchForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleSearchSubmit"
      >
        <h3>Search</h3>
        <a-form-item label="Book name:">
          <a-input v-decorator="['name']" placeholder="Input book" />
        </a-form-item>

        <a-form-item label="Title:">
          <a-input v-decorator="['title']" placeholder="Input middle name" />
        </a-form-item>

        <a-form-item label="Bbk:">
          <a-input v-decorator="['bbk']" placeholder="Input Surname" />
        </a-form-item>

        <a-form-item label="Author:">
          <a-input v-decorator="['author_id']" placeholder="Input tittle" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit" :disabled=" getButtonDisabled()">Search</a-button>
        </a-form-item>
      </a-form>
    </div>
    <a-table :columns="columns" :data-source="data">
        <span class="action-buttons" slot="action" slot-scope="text, record" >
        <a-button type="danger" @click="onDelete(record.entry_id)">Delete</a-button>
        <a-button type="primary">Edit</a-button>
      </span>
    </a-table>
  </div>
</template>

<script>
import axios from "axios";

import { Button, Form, Input, Table, DatePicker } from "ant-design-vue";
import { bookColumns as columns, dateFormat } from "@/constants.js";

export default {
  name: "BookSearch",
  components: {
    "a-button": Button,
    "a-form": Form,
    "a-input": Input,
    "a-form-item": Form.Item,
    "a-table": Table,
    "a-date-picker": DatePicker
  },
  data() {
    return {
      formLayout: "horizontal",
      searchForm: this.$form.createForm(this, { name: "BookSearch" }),
      inputForm: this.$form.createForm(this, { name: "BookInput" }),
      data: [],
      columns,
      isButtonDisabled: true,
      dateFormat
    };
  },
  methods: {
    handleSearchSubmit(e) {
      e.preventDefault();
      this.searchForm.validateFields(async (err, values) => {
        if (!err) {
          let link = "http://localhost:5000/books";
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
          axios.post("http://localhost:5000/book", Object.values(values));
          console.log(values);
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
    await axios.get(`http://localhost:5000/books`).then(response => {
      const { data } = response;
      this.data = data;
      console.log(this.data);
    });
  }
};
</script>
