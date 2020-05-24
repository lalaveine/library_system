 <template>
  <a-modal
    :visible="visible"
    title="Edit journal entry"
    okText="Update"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('update') }"
  >
    <a-form layout="horizontal" :form="form">
      <a-form-item label="Entry id">
        <a-input-number
          disabled="disabled"
          v-decorator="[
                'entry_id',
                {
                rules: [{ required: true, message: 'Please enter the name!' }],
                }
            ]"
        />
      </a-form-item>
      <a-form-item label="Name">
        <a-input
          v-decorator="[
                'name',
                {
                rules: [{ required: true, message: 'Please enter the name!' }],
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
                rules: [{ required: true, message: 'Please enter the middle name!' }],
                }
            ]"
          placeholder="Reader's middle name"
        />
      </a-form-item>
      <a-form-item label="Surname">
        <a-input
          v-decorator="[
                'surname',
                {
                rules: [{ required: true, message: 'Please enter the middle name!' }],
                }
            ]"
          placeholder="Reader's middle name"
        />
      </a-form-item>
      <a-form-item label="Edition ID">
        <a-input
          v-decorator="[
                'edition_id',
                {
                rules: [{ required: true, message: 'Please enter the edition id!' }],
                }
            ]"
          placeholder="Edition's ID"
        />
      </a-form-item>
      <a-form-item label="Take date">
        <a-date-picker
          v-decorator="[
                'take_date',
                {
                rules: [{ required: true, message: 'Please enter the middle name!' }],
                }
            ]"
        />
      </a-form-item>
      <a-form-item label="Return date">
        <a-date-picker
          v-decorator="[
                'return_date',
                {
                rules: [{ required: true, message: 'Please enter the middle name!' }],
                }
            ]"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { Form, Input, Modal, DatePicker, InputNumber } from "ant-design-vue";

export default {
  name: "JournalUpdateForm",
  props: [
    "visible",
    "name",
    "middle_name",
    "surname",
    "title",
    "edition_id",
    "reader_id",
    "return_date",
    "take_date",
    "entry_id"
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
          entry_id: this.$form.createFormField({
            ...this.entry_id,
            value: this.entry_id
          }),
          name: this.$form.createFormField({
            ...this.name,
            value: this.name
          }),
          middle_name: this.$form.createFormField({
            ...this.middle_name,
            value: this.middle_name
          }),
          surname: this.$form.createFormField({
            ...this.surname,
            value: this.surname
          }),
          edition_id: this.$form.createFormField({
            ...this.edition_id,
            value: this.edition_id
          }),
          take_date: this.$form.createFormField({
            ...this.take_date,
            value: this.take_date
          }),
          return_date: this.$form.createFormField({
            ...this.return_date,
            value: this.return_date
          })
        };
      },
      // onValuesChange(_, values) {
      //   console.log(values);
      // }
    });
  },
  data() {
    return {
      disabled: true
    };
  },
  watch: {
    name() {
      this.form.updateFields({
        name: this.$form.createFormField({
          ...this.name,
          value: this.name
        })
      });
    },
    entry_id() {
      this.form.updateFields({
        entry_id: this.$form.createFormField({
          ...this.entry_id,
          value: this.entry_id
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
    surname() {
      this.form.updateFields({
        surname: this.$form.createFormField({
          ...this.surname,
          value: this.surname
        })
      });
    },
    edition_id() {
      this.form.updateFields({
        edition_id: this.$form.createFormField({
          ...this.edition_id,
          value: this.edition_id
        })
      });
    },
    take_date() {
      this.form.updateFields({
        take_date: this.$form.createFormField({
          ...this.take_date,
          value: this.take_date
        })
      });
    },
    return_date() {
      this.form.updateFields({
        return_date: this.$form.createFormField({
          ...this.return_date,
          value: this.return_date
        })
      });
    }
  }
};
</script>