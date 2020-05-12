 <template>
  <div class="content">
    <h1>Reader search</h1>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
      <a-form-item label="Name:">
        <a-input
          v-decorator="['name']"
          placeholder="Input reader's name"
        />
      </a-form-item>
      <a-form-item label="Surname">
        <a-input
          v-decorator="['surname']"
          placeholder="Input reader's name"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit" :disabled="getButtonDisabled()">Submit</a-button>
      </a-form-item>
    </a-form>
    <a-table :columns="columns" :data-source="data"></a-table>
  </div>
</template>

<script>
import {
  Button,
  Form,
  Input,
  Table
} from "ant-design-vue";
import { readerColumns as columns } from "@/constants.js";

export default {
  name: "BookSearch",
  components: {
    "a-button": Button,
    "a-form": Form,
    "a-input": Input,
    "a-form-item": Form.Item,
    "a-table": Table,
  },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "reader-search" }),
      data: [],
      columns,
      isButtonDisabled: true
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    getButtonDisabled() {
      const fields = this.form.getFieldsValue();
      const keys = Object.keys(this.form.getFieldsValue());
      for (let key of keys) {
        if (fields[key]) {
          return false;
        }
      }
      return true;
    }
  }
};

</script>

<style>
.ant-form .ant-form-item-label {
  text-align: left;
}

.content {
  padding: 15px;
}
</style>