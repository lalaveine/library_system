 <template>
  <a-modal
    :visible="visible"
    title="Edit publisher information"
    okText="Update"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('update') }"
  >
    <a-form layout="horizontal" :form="form">
      <a-form-item label="ID">
        <a-input-number disabled="disabled" v-decorator="['edition_id']" />
      </a-form-item>
      <a-form-item label="Book Title">
        <a-input
          v-decorator="[
                'book_title',
                {
                rules: [{ required: true, message: 'Please enter a book title!' }],
                }
            ]"
          placeholder="book title"
        />
      </a-form-item>
      <a-form-item label="Library">
        <a-input
          v-decorator="[
                  'library_name',
                  {
                  rules: [{ required: true, message: 'Please enter a library!' }],
                  }
              ]"
          placeholder="library name"
        />
      </a-form-item>
      <a-form-item label="Taken">
        <a-checkbox 
            v-decorator="['taken']" 
            :defaultChecked="taken"
          />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { Form, Input, Modal, Checkbox, InputNumber } from "ant-design-vue";

export default {
  name: "EditionUpdateForm",
  props: [
    "visible",
    "edition_id",
    "book_title",
    "library_name",
    "taken"
  ],
  components: {
    "a-modal": Modal,
    "a-form": Form,
    "a-form-item": Form.Item,
    "a-input": Input,
    "a-checkbox": Checkbox,
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
          edition_id: this.$form.createFormField({
            ...this.edition_id,
            value: this.edition_id
          }),
          book_title: this.$form.createFormField({
            ...this.book_title,
            value: this.book_title
          }),
          library_name: this.$form.createFormField({
            ...this.library_name,
            value: this.library_name
          }),
          taken: this.$form.createFormField({
            ...this.taken,
            value: this.taken
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
    book_title() {
      this.form.updateFields({
        book_title: this.$form.createFormField({
          ...this.book_title,
          value: this.book_title
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
    taken() {
      this.form.updateFields({
        taken: this.$form.createFormField({
          ...this.taken,
          value: this.taken
        })
      });
    }
  }
};
</script>