 <template>
  <a-modal
    :visible="visible"
    title="Edit publisher information"
    okText="Update"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('update') }"
  >
    <a-form layout="horizontal" :form="form">
      <a-form-item label="Book ID">
        <a-input-number disabled="disabled" v-decorator="['book_id']" />
      </a-form-item>

      <a-form-item label="Book title">
        <a-input
          v-decorator="[
                'book_title',
                {
                rules: [{ required: true, message: 'Please enter a book title!' }],
                }
            ]"
          placeholder="Book title name"
        />
      </a-form-item>

      <a-form-item label="ISBN">
        <a-input
          v-decorator="[
                'isbn',
                {
                rules: [{ required: true, message: `Please enter book's isbn!` }],
                }
            ]"
          placeholder="Input isbn"
        />
      </a-form-item>

      <a-form-item label="ББК">
        <a-input v-decorator="['bbk']" placeholder="Input bbk" />
      </a-form-item>

      <a-form-item label="Publisher name">
        <a-input
          v-decorator="[
                'publisher_name',
                {
                rules: [{ required: true, message: `Please enter publihser name!` }],
                }
            ]"
          placeholder="Input publihser name"
        />
      </a-form-item>

      <a-form-item label="Publishing year">
        <a-input
          v-decorator="[
                'pub_year',
                {
                rules: [{ required: true, message: `Please enter publihsing year!` }],
                }
            ]"
          placeholder="Input publihsing year"
        />
      </a-form-item>

      <a-form-item v-for="(i, index) in authors" :key="index" :required="false">
        <div class="author-label">
          <h3>Author {{index+1}}:</h3>
        </div>
        <a-form-item label="Author Surname:">
          <a-input
            v-decorator="[`${index}author_surname`, { rules: [{ required: true, message: 'Please input author surname' }] }]"
            placeholder="Input author surname"
          />
        </a-form-item>

        <a-form-item label="Author Name:">
          <a-input
            v-decorator="[`${index}author_name`, { rules: [{ required: true, message: 'Please input author name' }] }]"
            placeholder="Input author name"
          />
        </a-form-item>

        <a-form-item label="Author Middle Name:">
          <a-input
            v-decorator="[`${index}author_mid_name`, { rules: [{ message: 'Please input author middle name' }] }]"
            placeholder="Input author middle name"
          />
        </a-form-item>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { Form, Input, Modal, DatePicker, InputNumber } from "ant-design-vue";

export default {
  name: "BookUpdateForm",
  props: [
    "visible",
    "book_id",
    "book_title",
    "publisher_name",
    "bbk",
    "isbn",
    "pub_year",
    "authors"
  ],
  components: {
    "a-modal": Modal,
    "a-form": Form,
    "a-form-item": Form.Item,
    "a-input": Input,
    "a-date-picker": DatePicker,
    "a-input-number": InputNumber
  },
  mounted() {
    this.form = this.$form.createForm(this, {
      name: "booklEditForm",
      onFieldsChange: (_, changedFields) => {
        this.$emit("change", changedFields);
      },
      mapPropsToFields: () => {
        
        let authors = this.authors;
        let authorsObject = {};
        if (authors) {
          authors.map((e, i) => {
            let [author_name, author_mid_name, author_surname] = e.split(" ");
            authorsObject[`${i}author_name`] = this.$form.createFormField({
              ...author_name,
              value: author_name
            });
            authorsObject[`${i}author_mid_name`] = this.$form.createFormField({
              ...author_mid_name,
              value: author_mid_name
            });
            authorsObject[`${i}author_surname`] = this.$form.createFormField({
              ...author_surname,
              value: author_surname
            });
          });
        }
        return {
          ...authorsObject,
          book_id: this.$form.createFormField({
            ...this.book_id,
            value: this.book_id
          }),
          book_title: this.$form.createFormField({
            ...this.book_title,
            value: this.book_title
          }),
          isbn: this.$form.createFormField({
            ...this.isbn,
            value: this.isbn
          }),
          pub_year: this.$form.createFormField({
            ...this.pub_year,
            value: this.pub_year
          }),
          publisher_name: this.$form.createFormField({
            ...this.publisher_name,
            value: this.publisher_name
          }),
          bbk: this.$form.createFormField({
            ...this.bbk,
            value: this.bbk
          }),
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
    book_id() {
      this.form.updateFields({
        book_id: this.$form.createFormField({
          ...this.book_id,
          value: this.book_id
        })
      });
    },
    book_title() {
      this.form.updateFields({
        book_title: this.$form.createFormField({
          ...this.book_title,
          value: this.book_title
        })
      });
    },
    publisher_name() {
      this.form.updateFields({
        publisher_name: this.$form.createFormField({
          ...this.publisher_name,
          value: this.publisher_name
        })
      });
    },
    isbn() {
      this.form.updateFields({
        isbn: this.$form.createFormField({
          ...this.isbn,
          value: this.isbn
        })
      });
    },
    pub_year() {
      this.form.updateFields({
        pub_year: this.$form.createFormField({
          ...this.pub_year,
          value: this.pub_year
        })
      });
    },
    bbk() {
      this.form.updateFields({
        bbk: this.$form.createFormField({
          ...this.bbk,
          value: this.bbk
        })
      });
    }
  }
};
</script>