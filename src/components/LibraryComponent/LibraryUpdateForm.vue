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
                'library_name',
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
                'library_address',
                {
                rules: [{ required: true, message: 'Please enter an address!' }],
                }
            ]"
          placeholder="Address"
        />
      </a-form-item>
      <a-form-item label="City">
        <a-input
          v-decorator="[
                'city_name',
                {
                rules: [{ required: true, message: 'Please enter a city!' }],
                }
            ]"
          placeholder="City"
        />
      </a-form-item>
      <a-form-item label="Email">
        <a-input
          v-decorator="[
                'library_email',
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
    "library_address",
    "library_name",
    "city_name",
    "library_id",
    "library_email"
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
          library_name: this.$form.createFormField({
            ...this.library_name,
            value: this.library_name
          }),
          city_name: this.$form.createFormField({
            ...this.city_name,
            value: this.city_name
          }),
          library_address: this.$form.createFormField({
            ...this.library_address,
            value: this.library_address
          }),
          library_email: this.$form.createFormField({
            ...this.library_email,
            value: this.library_email
          })
        };
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
    library_name() {
      this.form.updateFields({
        library_name: this.$form.createFormField({
          ...this.library_name,
          value: this.library_name
        })
      });
    },
    library_address() {
      this.form.updateFields({
        library_address: this.$form.createFormField({
          ...this.library_address,
          value: this.library_address
        })
      });
    },
    city_name() {
      this.form.updateFields({
        city_name: this.$form.createFormField({
          ...this.city_name,
          value: this.city_name
        })
      });
    },
    library_email() {
      this.form.updateFields({
        library_email: this.$form.createFormField({
          ...this.library_email,
          value: this.library_email
        })
      });
    }
  }
};
</script>