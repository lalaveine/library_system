 <template>
  <div class="reader-input">
    <h1>Library</h1>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
      <a-form-item label="Library:">
        <a-input
          v-decorator="['title', { rules: [{ required: true, message: 'Please input Library\'s name!' }] }]"
          placeholder="Input Library's name"
        />
      </a-form-item>
        <a-form-item label="Adress:">
        <a-input
          v-decorator="['adress', { rules: [{ required: true, message: 'Please input adress!' }] }]"
          placeholder="Input library's adress"
        />
      </a-form-item>
        <a-form-item label="Email:">
        <a-input
          v-decorator="['email', { rules: [{ required: true, message: 'Please input email adress!' }] }]"
          placeholder="Input E-mail"
        />
      </a-form-item>
      
      
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit" :disabled=" getButtonDisabled()">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { Button, Form, Input } from "ant-design-vue";
import { readerColumns as columns } from "@/constants.js";

export default {
  name: "BookSearch",
  components: {
    "a-button": Button,
    "a-form": Form,
    "a-input": Input,
    "a-form-item": Form.Item
  },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "add-reader" }),
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

.reader-input {
  /* width: 950px; */
  padding: 15px;
}
</style>