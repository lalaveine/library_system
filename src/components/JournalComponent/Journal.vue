 <template>
  <div class="component">
    <h1>Journal</h1>
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
            v-decorator="['name', { rules: [{ required: true, message: 'Please input reader`s name' }] }]"
            placeholder="Input reader`s name"
          />
        </a-form-item>

        <a-form-item label="Middle name:">
          <a-input
            v-decorator="['middle_name', { rules: [{ required: true, message: 'Please input reader`s middle surname' }] }]"
            placeholder="Input reader`s middle name"
          />
        </a-form-item>

        <a-form-item label="Surname:">
          <a-input
            v-decorator="['surname', { rules: [{ required: true, message: 'Please input reader`s surname' }] }]"
            placeholder="Input reader`s surname"
          />
        </a-form-item>

        <a-form-item label="Edition ID:">
          <a-input
            v-decorator="['edition_id', { rules: [{ required: true, message: 'Please input edition`s ID' }] }]"
            placeholder="Input edition`s ID"
          />
        </a-form-item>

        <a-form-item label="Take date:">
          <a-date-picker
            v-decorator="['take_date', { rules: [{ required: true, message: 'Please input take date' }] }]"
            placeholder="Input take date"
          />
        </a-form-item>

        <a-form-item label="Return date:">
          <a-date-picker
            v-decorator="['return_date', { rules: [{ required: true, message: 'Please input return date' }] }]"
            placeholder="Input return date"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
      <!-- <hr /> -->

      <a-form
        :form="searchForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleSearchSubmit"
      >
        <h3>Search</h3>
        <a-form-item label="Name:">
          <a-input v-decorator="['name']" placeholder="Input book" />
        </a-form-item>

        <a-form-item label="Middle name:">
          <a-input v-decorator="['middle_name']" placeholder="Input middle name" />
        </a-form-item>

        <a-form-item label="Surname:">
          <a-input v-decorator="['surname']" placeholder="Input Surname" />
        </a-form-item>

        <a-form-item label="Tittle:">
          <a-input v-decorator="['tittle']" placeholder="Input tittle" />
        </a-form-item>

        <a-form-item label="Take date:">
          <a-date-picker v-decorator="['take_date']" placeholder="Input take date" />
        </a-form-item>

        <a-form-item label="Return date:">
          <a-date-picker v-decorator="['return_date']" placeholder="Input return date" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit" :disabled=" getButtonDisabled()">Search</a-button>
        </a-form-item>
      </a-form>
    </div>
    <a-table :columns="columns" :data-source="data"></a-table>
  </div>
</template>

<script>
import axios from "axios";

import { Button, Form, Input, Table, DatePicker } from "ant-design-vue";
import { journalColumns as columns, dateFormat } from "@/constants.js";

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
      searchForm: this.$form.createForm(this, { name: "journalSearch" }),
      inputForm: this.$form.createForm(this, { name: "journalInput" }),
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
          let link = "/journal?";
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
          axios.post("/journal", Object.values(values));
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
    await axios.get(`/journal`).then(response => {
      const { data } = response;
      this.data = data;
      console.log(this.data);
    });
  }
};
</script>
