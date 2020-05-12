 <template>
  <div class="reader-input">
    <h1>Add a new book</h1>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
      <a-form-item label="Title:">
        <a-input
          v-decorator="['title', { rules: [{ required: true, message: 'Please input title!' }] }]"
          placeholder="Input book's title"
        />
      </a-form-item>
      <a-form-item label="BBK:">
        <a-input
          v-decorator="['bbk', { rules: [{ required: true, message: 'Please input bbk!' }] }]"
          placeholder="Input book's bbk"
        />
      </a-form-item>
            <a-form-item label="Author:">
        <a-input
          v-decorator="['author', { rules: [{ required: true, message: 'Please input author!' }] }]"
          placeholder="Input book's author"
        />
      </a-form-item>
      
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
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