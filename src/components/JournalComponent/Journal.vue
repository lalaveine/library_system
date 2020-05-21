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

        <a-form-item label="Tittle:">
          <a-input v-decorator="['tittle']" placeholder="Input tittle" />
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
      <collection-create-form
            ref="collectionForm"
            :visible="visible"
            @cancel="handleCancel"
            @create="handleCreate"
      />
    </div>
    <!-- Actions @click="onDelete(record.entry_id)" -->
    <a-table :columns="columns" :data-source="data">
      <span class="action-buttons" slot="action" slot-scope="text, record" >
        <a-button type="danger" @click="showDeleteConfirm">Delete</a-button>
        <a-button type="primary" @click="showModal">Edit</a-button>    
      </span>
    </a-table>
    <!-- End Actions -->


  </div>
</template>

<script>
import axios from "axios";

import { Button, Form, Input, Table, Modal, DatePicker } from "ant-design-vue";
import { journalColumns as columns, dateFormat } from "@/constants.js";

const CollectionCreateForm = {
  props: ['visible'],
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'form_in_modal' });
  },
  template: `
    <a-modal
      :visible="visible"
      title='Create a new collection'
      okText='Create'
      @cancel="() => { $emit('cancel') }"
      @ok="() => { $emit('create') }"
    >
      <a-form layout='vertical' :form="form">
        <a-form-item label='Title'>
          <a-input
            v-decorator="[
              'title',
              {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              }
            ]"
          />
        </a-form-item>
        <a-form-item label='Description'>
          <a-input
            type='textarea'
            v-decorator="['description']"
          />
        </a-form-item>
        <a-form-item class='collection-create-form_last-form-item'>
          <a-radio-group
            v-decorator="[
              'modifier',
              {
                initialValue: 'private',
              }
            ]"
          >
              <a-radio value='public'>Public</a-radio>
              <a-radio value='private'>Private</a-radio>
            </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  `,
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
    "collection-create-form": CollectionCreateForm
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
      dateFormat
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
    showModal() {
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
    handleCreate() {
      const form = this.$refs.collectionForm.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        console.log('Received values of form: ', values);
        form.resetFields();
        this.visible = false;
      });
    },
    showDeleteConfirm() {
      this.$confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
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
       await axios.delete(`http://localhost:5000/journal/${id}`)
    }
  },
  async mounted() {
    await axios.get(`http://localhost:5000/journal`).then(response => {
      const { data } = response;
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

.ant-btn{
  margin: 3px;
}
</style>