 <template>
  <a-modal
    :visible="visible"
    title="Edit publisher information"
    okText="Update"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('update') }"
  >
    <a-form layout="horizontal" :form="form">
      <a-form-item label="Publisher ID">
        <a-input-number disabled="disabled" v-decorator="['publisher_id']" />
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
      <a-form-item label="City">
        <a-input
          v-decorator="[
                  'city',
                  {
                  rules: [{ required: true, message: 'Please enter a city!' }],
                  }
              ]"
          placeholder="Reader's surname"
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
  name: "PublisherUpdateForm",
  props: ["visible", "name", "city", "publisher_id", "email"],

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
          publisher_id: this.$form.createFormField({
            ...this.publisher_id,
            value: this.publisher_id
          }),
          city: this.$form.createFormField({
            ...this.city,
            value: this.city
          }),
          name: this.$form.createFormField({
            ...this.name,
            value: this.name
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
    publisher_id() {
      this.form.updateFields({
        publisher_id: this.$form.createFormField({
          ...this.publisher_id,
          value: this.publisher_id
        })
      });
    },
    city() {
      this.form.updateFields({
        city: this.$form.createFormField({
          ...this.city,
          value: this.city
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