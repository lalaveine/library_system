 <template>
  <a-modal
    :visible="visible"
    title="Edit reader information"
    okText="Update"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('update') }"
  >
    <a-form layout="horizontal" :form="form">
      <a-form-item label="Author ID">
        <a-input-number disabled="disabled" v-decorator="['author_id']" />
      </a-form-item>
      <a-form-item label="Surname">
        <a-input
          v-decorator="[
                  'author_surname',
                  {
                  rules: [{ required: true, message: 'Please enter a surname!' }],
                  }
              ]"
          placeholder="Author's surname"
        />
      </a-form-item>
      <a-form-item label="Name">
        <a-input
          v-decorator="[
                'author_name',
                {
                rules: [{ required: true, message: 'Please enter a name!' }],
                }
            ]"
          placeholder="Author's name"
        />
      </a-form-item>
      <a-form-item label="Middle name">
        <a-input
          v-decorator="[
                'author_mid_name',
                {
                rules: [{ message: 'Please enter a middle name!' }],
                }
            ]"
          placeholder="Reader's middle name"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { Form, Input, Modal, DatePicker, InputNumber } from "ant-design-vue";

export default {
  name: "AuthorUpdateForm",
  props: [
    "visible",
    "author_name",
    "author_mid_name",
    "author_surname",
    "author_id"
  ],

  components: {
    "a-modal": Modal,
    "a-form": Form,
    "a-form-item": Form.Item,
    "a-input": Input,
    "a-date-picker": DatePicker,
    "a-input-number": InputNumber
  },
  created() {
    this.form = this.$form.createForm(this, {
      name: "journalEditForm",
      onFieldsChange: (_, changedFields) => {
        this.$emit("change", changedFields);
      },
      mapPropsToFields: () => {
        return {
          author_id: this.$form.createFormField({
            ...this.author_id,
            value: this.author_id
          }),
          author_surname: this.$form.createFormField({
            ...this.author_surname,
            value: this.author_surname
          }),
          author_name: this.$form.createFormField({
            ...this.author_name,
            value: this.author_name
          }),
          author_mid_name: this.$form.createFormField({
            ...this.author_mid_name,
            value: this.author_mid_name
          })
        };
      },
      onValuesChange(_, values) {
        console.log(values);
      }
    });
  },
  data() {
    return {
      disabled: true
    };
  },
  watch: {
    author_id() {
      this.form.updateFields({
        author_id: this.$form.createFormField({
          ...this.author_id,
          value: this.author_id
        })
      });
    },
    author_surname() {
      this.form.updateFields({
        author_surname: this.$form.createFormField({
          ...this.author_surname,
          value: this.author_surname
        })
      });
    },
    author_name() {
      this.form.updateFields({
        author_name: this.$form.createFormField({
          ...this.author_name,
          value: this.author_name
        })
      });
    },
    author_mid_name() {
      this.form.updateFields({
        author_mid_name: this.$form.createFormField({
          ...this.author_mid_name,
          value: this.author_mid_name
        })
      });
    }
  }
};
</script>