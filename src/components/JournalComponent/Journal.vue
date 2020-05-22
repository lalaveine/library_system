 <template>
  <div class="component">
    <h1>Journal</h1>
    <hr />
    <div class="content">
      <a-form
        :form="inputForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleInputSubmit"
      >
        <h3>Input</h3>
        <a-form-item label="Name:">
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: 'Please input reader`s name' }] }]"
            placeholder="Input reader`s name"
          />
        </a-form-item>

        <a-form-item label="Middle name:">
          <a-input
            v-decorator="['middle_name', { rules: [{ required: true, message: 'Please input reader`s middle surname' }] }]"
            placeholder="Input reader`s middle name"
          />
        </a-form-item>

        <a-form-item label="Surname:">
          <a-input
            v-decorator="['surname', { rules: [{ required: true, message: 'Please input reader`s surname' }] }]"
            placeholder="Input reader`s surname"
          />
        </a-form-item>

        <a-form-item label="Edition ID:">
          <a-input
            v-decorator="['edition_id', { rules: [{ required: true, message: 'Please input edition`s ID' }] }]"
            placeholder="Input edition`s ID"
          />
        </a-form-item>

        <a-form-item label="Take date:">
          <a-date-picker
            v-decorator="['take_date', { rules: [{ required: true, message: 'Please input take date' }] }]"
            placeholder="Input take date"
          />
        </a-form-item>

        <a-form-item label="Return date:">
          <a-date-picker
            v-decorator="['return_date', { rules: [{ required: true, message: 'Please input return date' }] }]"
            placeholder="Input return date"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
      <!-- <hr /> -->

      <a-form
        :form="searchForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleSearchSubmit"
      >
        <h3>Search</h3>
        <a-form-item label="Name:">
          <a-input v-decorator="['name']" placeholder="Input book" />
        </a-form-item>

        <a-form-item label="Middle name:">
          <a-input v-decorator="['middle_name']" placeholder="Input middle name" />
        </a-form-item>

        <a-form-item label="Surname:">
          <a-input v-decorator="['surname']" placeholder="Input Surname" />
        </a-form-item>

        <a-form-item label="Title:">
          <a-input v-decorator="['title']" placeholder="Input title" />
        </a-form-item>

        <a-form-item label="Take date:">
          <a-date-picker v-decorator="['take_date']" placeholder="Input take date" />
        </a-form-item>

        <a-form-item label="Return date:">
          <a-date-picker v-decorator="['return_date']" placeholder="Input return date" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit" :disabled="getButtonDisabled()">Search</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div>
      <!--  ref="collectionForm" some how connects it to the form-->
      <journal-update-form
        ref="editForm" 
        :visible="visible"
        :name=fields.name
        :middle_name=fields.middle_name
        :surname=fields.surname
        :title=fields.title
        :edition_id=fields.edition_id
        :reader_id=fields.reader_id
        :return_date=fields.return_date
        :take_date=fields.take_date
        :entry_id=fields.entry_id 
        @cancel="handleCancel"
        @update="handleUpdateSubmit"
        @change="handleFormChange"
      />
    </div>
    <!-- Actions @click="onDelete(record.entry_id)" -->
    <a-table :columns="columns" :data-source="data">
      <span class="action-buttons" slot="action" slot-scope="text, record">
        <a-button type="danger" @click="showDeleteConfirm(record.entry_id)">Delete</a-button>
        <a-button type="primary" @click="showUpdateModal(record)">Edit</a-button>
      </span>
    </a-table>
    <!-- End Actions -->
  </div>
</template>

<script>
import axios from "axios";

import { Button, Form, Input, Table, Modal, DatePicker, InputNumber } from "ant-design-vue";
import { journalColumns as columns, dateFormat } from "@/constants.js";

const JournalUpdateForm = {
  props: [
    'visible',
    'name',
    'middle_name',
    'surname',
    'title',
    'edition_id',
    'reader_id',
    'return_date',
    'take_date',
    'entry_id'
  ],
 
  components: {
    "a-modal": Modal,
    "a-form": Form,
    "a-form-item": Form.Item,
    "a-input": Input,
    "a-date-picker": DatePicker,
    "a-input-number": InputNumber
  },
  template: `
    <a-modal
      :visible="visible"
      title='Edit journal entry'
      okText='Update'
      @cancel="() => { $emit('cancel') }"
      @ok="() => { $emit('update') }"
    >
      <a-form layout='horizontal' 
        :form="form"
      >
        <a-form-item label='Entry id'>
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
        <a-form-item label='Name'>
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
        <a-form-item label='Middle name'>
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
        <a-form-item label='Surname'>
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
        <a-form-item label='Edition ID'>
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
        <a-form-item label='Take date'>
          <a-date-picker
            v-decorator="[
              'take_date',
              {
                rules: [{ required: true, message: 'Please enter the middle name!' }],
              }
            ]"
          />
        </a-form-item>
        <a-form-item label='Return date'>
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
  `,
   created() {
    this.form = this.$form.createForm(this, { 
      name: "journalEditForm", 
      onFieldsChange: (_, changedFields) => {
        this.$emit('change', changedFields);
      },
      mapPropsToFields: () => {
        return {
          entry_id: this.$form.createFormField({
            ...this.entry_id,
            value: this.entry_id,
          }),
          name: this.$form.createFormField({
            ...this.name,
            value: this.name,
          }),
          middle_name: this.$form.createFormField({
            ...this.middle_name,
            value: this.middle_name,
          }),
          surname: this.$form.createFormField({
            ...this.surname,
            value: this.surname,
          }),
          edition_id: this.$form.createFormField({
            ...this.edition_id,
            value: this.edition_id,
          }),
          take_date: this.$form.createFormField({
            ...this.take_date,
            value: this.take_date,
          }),
          return_date: this.$form.createFormField({
            ...this.return_date,
            value: this.return_date,
          }),
        };
      },
      onValuesChange(_, values) {
        console.log(values);
      },
    });
  },
  watch: {
    name() {
      this.form.updateFields({
        name: this.$form.createFormField({
          ...this.name,
          value: this.name,
        }),
      });
    },
    entry_id() {
      this.form.updateFields({
        entry_id: this.$form.createFormField({
          ...this.entry_id,
          value: this.entry_id,
        }),
      }); 
    },
    middle_name() {
      this.form.updateFields({
        middle_name: this.$form.createFormField({
          ...this.middle_name,
          value: this.middle_name,
        }),
      }); 
    },
    surname() {
      this.form.updateFields({
        surname: this.$form.createFormField({
            ...this.surname,
            value: this.surname,
        }),
      }); 
    },
    edition_id() {
      this.form.updateFields({
        edition_id: this.$form.createFormField({
          ...this.edition_id,
          value: this.edition_id,
        }),
      }); 
    },  
    take_date() {
      this.form.updateFields({
        take_date: this.$form.createFormField({
          ...this.take_date,
          value: this.take_date,
        }),
      }); 
    },      
    take_date() {
      this.form.updateFields({
        return_date: this.$form.createFormField({
            ...this.return_date,
            value: this.return_date,
        }),
      }); 
    },    
  },
};

export default {
  name: "Journal",
  components: {
    "a-button": Button,
    "a-form": Form,
    "a-input": Input,
    "a-form-item": Form.Item,
    "a-table": Table,
    "a-date-picker": DatePicker,
    "a-modal": Modal,
    "journal-update-form": JournalUpdateForm
  },
  data() {
    return {
      formLayout: "horizontal",
      searchForm: this.$form.createForm(this, { name: "journalSearchForm" }),
      inputForm: this.$form.createForm(this, { name: "journalInputForm" }),
      data: [],
      columns,
      visible: false,
      isButtonDisabled: true,
      disabled: true,
      fields: { },
      dateFormat,
      Modal
    };
  },
  methods: {
    handleSearchSubmit(e) {
      e.preventDefault();
      this.searchForm.validateFields(async (err, values) => {
        if (!err) {
          console.log(values);
          let link = "http://localhost:5000/journal?";
          for (let key in values) {
            if (values[key]) {
              link += `${key}=${values[key]}&`;
            }
          }
          link = link.slice(0, -1);

          const response = await axios.get(link, values);
          const { data } = response;
          this.data = data;
        }
      });
    },
    handleInputSubmit(e) {
      e.preventDefault();
      this.inputForm.validateFields(async (err, values) => {
        if (!err) {
          axios.post("http://localhost:5000/journal", Object.values(values));
        }
      });
    },
    showUpdateModal(record) {
      console.log(record)
      this.visible = true;
      this.fields = {...record}
    },
    handleCancel() {
      this.visible = false;
    },
    handleUpdateSubmit() {
      const form = this.$refs.editForm.form;
      form.validateFields((err, values) => {
        if (!err) {
          // axios.put(`http://localhost:5000/journal/${values.entry_id}`, Object.values(values));
          console.log(values)
        }
        // console.log("Received values of form: ", values);
        // form.resetFields();
        //this.fields = record;
        console.log(this.record)
        this.visible = false;
      });
    },
    handleFormChange(changedFields) {
      this.fields = { ...this.fields, changedFields };
    },
    showDeleteConfirm(id) {
      Modal.confirm({
        title: "Are you sure delete this task?",
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        async onOk() {
          await axios.delete(`http://localhost:5000/journal/${id}`).then(() => true);
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    },
    getButtonDisabled() {
      const fields = this.searchForm.getFieldsValue();
      const keys = Object.keys(this.searchForm.getFieldsValue());
      for (let key of keys) {
        if (
          (key !== "copies" && fields[key]) ||
          (key === "copies" && typeof fields[key] === "number")
        ) {
          return false;
        }
      }
      return true;
    },
    async onDelete(id) {
      await axios.delete(`http://localhost:5000/journal/${id}`);
    }
  },
  async mounted() {
    await axios.get(`http://localhost:5000/journal`).then(response => {
      const { data } = response;
      data.forEach((entry) => {
        entry['take_date'] = entry['take_date'].substring(0, entry['take_date'].indexOf('T'));
        entry['return_date'] = entry['return_date'].substring(0, entry['return_date'].indexOf('T'));
      })
      this.data = data;
    });
  }
};
</script>

<style>
.action-buttons {
  display: flex;
  margin: 10px;
  flex-direction: column;
}

.ant-btn {
  margin: 3px;
}
</style>