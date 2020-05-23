 <template>
  <a-modal
    :visible="visible"
    title="Edit reader information"
    okText="Update"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('update') }"
  >
    <a-form layout="horizontal" :form="form">
      <a-form-item label="Reader ID">
        <a-input-number disabled="disabled" v-decorator="['reader_id']" />
      </a-form-item>
      <a-form-item label="Surname">
        <a-input
          v-decorator="[
                  'surname',
                  {
                  rules: [{ required: true, message: 'Please enter a surname!' }],
                  }
              ]"
          placeholder="Reader's surname"
        />
      </a-form-item>
      <a-form-item label="Name">
        <a-input
          v-decorator="[
                'name',
                {
                rules: [{ required: true, message: 'Please enter a name!' }],
                }
            ]"
          placeholder="Reader's name"
        />
      </a-form-item>
      <a-form-item label="Middle name">
        <a-input
          v-decorator="[
                'middle_name',
                {
                rules: [{ required: true, message: 'Please enter a middle name!' }],
                }
            ]"
          placeholder="Reader's middle name"
        />
      </a-form-item>

      <a-form-item label="Email">
        <a-input
          v-decorator="[
                'email',
                {
                rules: [{ required: true, message: 'Please enter an email!' }],
                }
            ]"
          placeholder="Reader's email"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { Form, Input, Modal, DatePicker, InputNumber } from "ant-design-vue";

export default {
  name: "ReaderUpdateForm",
  props: [
    "visible",
    "name",
    "middle_name",
    "surname",
    "reader_id",
    "email"
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
          reader_id: this.$form.createFormField({
            ...this.reader_id,
            value: this.reader_id
          }),
          surname: this.$form.createFormField({
            ...this.surname,
            value: this.surname
          }),
          name: this.$form.createFormField({
            ...this.name,
            value: this.name
          }),
          middle_name: this.$form.createFormField({
            ...this.middle_name,
            value: this.middle_name
          }),
          email: this.$form.createFormField({
            ...this.email,
            value: this.email
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
    reader_id() {
      this.form.updateFields({
        reader_id: this.$form.createFormField({
          ...this.reader_id,
          value: this.reader_id
        })
      });
    },
    surname() {
      this.form.updateFields({
        surname: this.$form.createFormField({
          ...this.surname,
          value: this.surname
        })
      });
    },
    name() {
      this.form.updateFields({
        name: this.$form.createFormField({
          ...this.name,
          value: this.name
        })
      });
    },
    middle_name() {
      this.form.updateFields({
        middle_name: this.$form.createFormField({
          ...this.middle_name,
          value: this.middle_name
        })
      });
    },
    email() {
      this.form.updateFields({
        email: this.$form.createFormField({
          ...this.email,
          value: this.email
        })
      });
    }
  }
};
</script>