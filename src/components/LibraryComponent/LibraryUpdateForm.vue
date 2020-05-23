 <template>
  <a-modal
    :visible="visible"
    title="Edit reader information"
    okText="Update"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('update') }"
  >
    <a-form layout="horizontal" :form="form">
      <a-form-item label="Library ID">
        <a-input-number disabled="disabled" v-decorator="['library_id']" />
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
      <a-form-item label="Address">
        <a-input
          v-decorator="[
                'address',
                {
                rules: [{ required: true, message: 'Please enter an address!' }],
                }
            ]"
          placeholder="Address"
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
          placeholder="Email"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { Form, Input, Modal, DatePicker, InputNumber } from "ant-design-vue";

export default {
  name: "LibraryUpdateForm",
  props: [
    "visible",
    "name",
    "address",
    "library_id",
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
          library_id: this.$form.createFormField({
            ...this.library_id,
            value: this.library_id
          }),
          name: this.$form.createFormField({
            ...this.name,
            value: this.name
          }),
          address: this.$form.createFormField({
            ...this.address,
            value: this.address
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
    library_id() {
      this.form.updateFields({
        library_id: this.$form.createFormField({
          ...this.library_id,
          value: this.library_id
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
    address() {
      this.form.updateFields({
        address: this.$form.createFormField({
          ...this.address,
          value: this.address
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