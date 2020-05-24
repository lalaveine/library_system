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
                'reader_name',
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
                'reader_mid_name',
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
                'reader_surname',
                {
                rules: [{ required: true, message: 'Please enter the surname!' }],
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
    "reader_name",
    "reader_mid_name",
    "reader_surname",
    "book_title",
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
          reader_name: this.$form.createFormField({
            ...this.reader_name,
            value: this.reader_name
          }),
          reader_mid_name: this.$form.createFormField({
            ...this.reader_mid_name,
            value: this.reader_mid_name
          }),
          reader_surname: this.$form.createFormField({
            ...this.reader_surname,
            value: this.reader_surname
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
    reader_name() {
      this.form.updateFields({
        reader_name: this.$form.createFormField({
          ...this.reader_name,
          value: this.reader_name
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
    reader_mid_name() {
      this.form.updateFields({
        reader_mid_name: this.$form.createFormField({
          ...this.reader_mid_name,
          value: this.reader_mid_name
        })
      });
    },
    reader_surname() {
      this.form.updateFields({
        reader_surname: this.$form.createFormField({
          ...this.reader_surname,
          value: this.reader_surname
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