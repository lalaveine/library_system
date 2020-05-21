 <template>
  <div class="component">
    <h1>Library</h1>
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
            v-decorator="['name', { rules: [{ required: true, message: 'Please input library`s name' }] }]"
            placeholder="Input library`s name"
          />
        </a-form-item>

        <a-form-item label="Email:">
          <a-input
            v-decorator="['email', { rules: [{ required: true, message: 'Please input email' }] }]"
            placeholder="Input email"
          />
        </a-form-item>

        <a-form-item label="adress:">
          <a-input
            v-decorator="['adress', { rules: [{ required: true, message: 'Please input adress' }] }]"
            placeholder="Input adress"
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
          <a-input v-decorator="['name']" placeholder="Input library's name" />
        </a-form-item>

        <a-form-item label="Email:">
          <a-input v-decorator="['email']" placeholder="Input Email" />
        </a-form-item>

        <a-form-item label="Address:">
          <a-input v-decorator="['Address']" placeholder="Input Address" />
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
import { libraryColumns as columns, dateFormat } from "@/constants.js";

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
      searchForm: this.$form.createForm(this, { name: "authorSearch" }),
      inputForm: this.$form.createForm(this, { name: "authorInput" }),
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
          console.log(values);
          let link = "http://localhost:5000/libraries";
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
          axios.post("http://localhost:5000/library", Object.values(values));
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
    await axios.get(`http://localhost:5000/libraries`).then(response => {
      const { data } = response;
      this.data = data;
      console.log(this.data);
    });
  }
};
</script>
