 <template>
  <div class="content">
    <h1>Journal</h1>
    <hr>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
      <a-form-item label="Book name:">
        <a-input
          v-decorator="['book-name', { rules: [{ required: true, message: 'Please input surname!' }] }]"
          placeholder="Input book name"
        />
      </a-form-item>
 
      <a-form-item label="Reader:">
        <a-input v-decorator="[ 'reader', { rules: [{ required: true, message: 'Please input reader!' }] } ]" placeholder="Input reader" />
      </a-form-item>
      <a-form-item label="Return date:">
        <a-date-picker v-decorator="[ 'return-date', { rules: [{ required: true, message: 'Please input return date!' }] } ]" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit" :disabled="getButtonDisabled()">Submit</a-button>
      </a-form-item>

       <hr>

       <h1>Search book</h1>
      <a-form-item label="Book name:">
        <a-input v-decorator="['reader']" placeholder="Input book" />
      </a-form-item>

      <a-form-item label="Reader name:">
        <a-input v-decorator="[ 'reader name']" placeholder="Input reader" />
      </a-form-item>

       <a-form-item label="Take date:">
        <a-date-picker v-decorator="[ 'date']" />
      </a-form-item>

      <a-form-item label="Return date:">
        <a-date-picker v-decorator="[ 'return-date']" />
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
  Table,
  DatePicker
} from "ant-design-vue";
import { journalColumns as columns } from "@/constants.js";

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
      form: this.$form.createForm(this, { name: "journal" }),
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
        if (
          (key !== "copies" && fields[key]) ||
          (key === "copies" && typeof fields[key] === "number")
        ) {
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
hr{
  border: none;
  margin-bottom: 20px;

  background-color:rgba(217, 217, 217, 0.5);
  height:1px;
}
</style>