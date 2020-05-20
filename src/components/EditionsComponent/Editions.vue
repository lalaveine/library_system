 <template>
  <div class="component">
    <h1>Edition</h1>
    <hr />
    <div class="content">
      <a-form
        :form="inputForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleInputSubmit"
      >
        <h3>Input</h3>
        <a-form-item label="publisher year:">
          <a-input
            v-decorator="['pub_year', { rules: [{ required: true, message: 'Please input publisher`s year' }] }]"
            placeholder="Input publisher`s year"
          />
        </a-form-item>

        <a-form-item label="publisher city:">
          <a-input
            v-decorator="['pub_city', { rules: [{ required: true, message: 'Please input publisher city' }] }]"
            placeholder="Input publisher city"
          />
        </a-form-item>

        <a-form-item label="library:">
          <a-input
            v-decorator="['library_id', { rules: [{ required: true, message: 'Please input reader`s surname' }] }]"
            placeholder="Input reader`s surname"
          />
        </a-form-item>

        <a-form-item label="Publisher ID:">
          <a-input
            v-decorator="['publisher_id', { rules: [{ required: true, message: 'Please input edition`s ID' }] }]"
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
      <hr />

      <a-form
        :form="searchForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleSearchSubmit"
      >
        <h3>Search</h3>
        <a-form-item label="publisher year:">
          <a-input v-decorator="['pub_year']" placeholder="Input publisher year:" />
        </a-form-item>

        <a-form-item label="publisher city:">
          <a-input v-decorator="['pub_city']" placeholder="Input publisher city" />
        </a-form-item>

        <a-form-item label="library:">
          <a-input v-decorator="['library_id']" placeholder="Input library" />
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
import { editionsColumns as columns, dateFormat } from "@/constants.js";

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
      searchForm: this.$form.createForm(this, { name: "editionSearch" }),
      inputForm: this.$form.createForm(this, { name: "editionInput" }),
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
          let link = "http://localhost:5000/editions";
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
          axios.post("http://localhost:5000/edition", Object.values(values));
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
    await axios.get(`http://localhost:5000/editions`).then(response => {
      const { data } = response;
      this.data = data;
      console.log(this.data);
    });
  }
};
</script>
