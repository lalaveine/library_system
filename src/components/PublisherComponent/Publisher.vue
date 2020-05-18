 <template>
  <div class="content">
    <h1>Author</h1>
    <hr />
    <h3>Input</h3>
    <a-form
      :form="inputForm"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 8 }"
      @submit="handleInputSubmit"
    >
      <a-form-item label="Name:">
        <a-input
          v-decorator="['name', { rules: [{ required: true, message: 'Please input publisher`s name' }] }]"
          placeholder="Input publisher`s name"
        />
      </a-form-item>

      <a-form-item label="City :">
        <a-input
          v-decorator="['city_id', { rules: [{ required: true, message: 'Please input email' }] }]"
          placeholder="Input email"
        />
      </a-form-item>

      <a-form-item label="Email:">
        <a-input
          v-decorator="['email', { rules: [{ required: true, message: 'Please input adress' }] }]"
          placeholder="Input adress"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
    <hr />

    <h3>Search</h3>
    <a-form
      :form="searchForm"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 8 }"
      @submit="handleSearchSubmit"
    >
      <a-form-item label="Name:">
        <a-input v-decorator="['name']" placeholder="Input publisher's name" />
      </a-form-item>

      <a-form-item label="City ID:">
        <a-input v-decorator="['city_id']" placeholder="Input Email" />
      </a-form-item>

      <a-form-item label="Email:">
        <a-input v-decorator="['email']" placeholder="Input Address" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit" :disabled=" getButtonDisabled()">Search</a-button>
      </a-form-item>
    </a-form>
    <a-table :columns="columns" :data-source="data"></a-table>
  </div>
</template>

<script>
import axios from "axios";

import { Button, Form, Input, Table, DatePicker } from "ant-design-vue";
import { publisherColumns as columns, dateFormat } from "@/constants.js";

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
      searchForm: this.$form.createForm(this, { name: "publusherSearch" }),
      inputForm: this.$form.createForm(this, { name: "publusherInput" }),
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

<style>
.ant-form .ant-form-item-label {
  text-align: left;
}
h2 {
  text-align: left;
  margin-bottom: 30px;
  font-size: 25px;
}

.content {
  padding: 15px;
   width: 950px;
}
hr {
  border: none;
  margin-bottom: 20px;

  background-color: rgba(217, 217, 217, 0.5);
  height: 1px;
}
</style>