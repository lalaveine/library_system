 <template>
  <div class="component">
    <h1>Publisher</h1>
    <hr />
    <div class="content">
      <a-form
        :form="inputForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleInputSubmit"
      >
        <div class="modal" v-if="modalOpen"> <!-- modal start-->
          <div class="modal__over" @click="closeModal"></div>
          <div div class="modal__content"> 
            <a-form-item label="Name:">
              <a-input
                v-decorator="['name']"
                placeholder="Input publisher`s name"
              />
            </a-form-item> 
            <a-form-item label="City :">
              <a-input
                v-decorator="['city_id']"
                placeholder="Input city"
              />
            </a-form-item>

            <a-form-item label="Email:">
              <a-input
                v-decorator="['email']"
                placeholder="Input adress"
              />
           </a-form-item>
          
            <div class="modal__content--btns">
               <a-button class="modal__content--edit" type="primary" html-type="submit">Change</a-button>
              <a-button class="modal__content--cancel" type="danger" @click="closeModal" >Cancel</a-button>  
            </div>
                     
          </div>
        </div> <!-- modal end-->
        <h3>Input</h3>
        <a-form-item label="Name:">
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: 'Please input publisher`s name' }] }]"
            placeholder="Input publisher`s name"
          />
        </a-form-item>

        <a-form-item label="City :">
          <a-input
            v-decorator="['city_id', { rules: [{ required: true, message: 'Please input city' }] }]"
            placeholder="Input city"
          />
        </a-form-item>

        <a-form-item label="Email:">
          <a-input
            v-decorator="['email', { rules: [{ required: true, message: 'Please input email' }] }]"
            placeholder="Input email"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
      <hr />

      <a-form
        :form="searchForm"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleSearchSubmit"
      >
      
        <h3>Search</h3>
        <a-form-item label="Name:">
          <a-input v-decorator="['name']" placeholder="Input publisher's name" />
        </a-form-item>

        <a-form-item label="City ID:">
          <a-input v-decorator="['city_id']" placeholder="Input city" />
        </a-form-item>

        <a-form-item label="Email:">
          <a-input v-decorator="['email']" placeholder="Input email" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit" :disabled=" getButtonDisabled()">Search</a-button>
        </a-form-item>
      </a-form>
    </div>
      <a-table :columns="columns" :data-source="data">
          <span class="action-buttons" slot="action" slot-scope="text, record" >
            <a-button  type="danger" @click="onDelete(record.entry_id)">Delete</a-button>
            <a-button @click="openModal" type="primary">Edit</a-button>
          </span>
       </a-table>
      
  </div>
</template>

<script>
import axios from "axios";

import { Button, Form, Input, Table, DatePicker } from "ant-design-vue";
import { publisherColumns as columns, dateFormat } from "@/constants.js";

export default {
  name: "BookSearch",
  components: {
    "a-button": Button,
    "a-form": Form,
    "a-input": Input,
    "a-form-item": Form.Item,
    "a-table": Table,
    "a-date-picker": DatePicker
  },
  data() {
    return {
      formLayout: "horizontal",
      searchForm: this.$form.createForm(this, { name: "publisherSearch" }),
      inputForm: this.$form.createForm(this, { name: "publisherInput" }),
      modalForm: this.$form.createForm(this, { name: "publisherEdit" }),
      data: [],
      columns,
      isButtonDisabled: true,
      dateFormat,
      modalOpen : false,
   
    };
  },
  methods: {
    handleSearchSubmit(e) {
      e.preventDefault();
      this.searchForm.validateFields(async (err, values) => {
        if (!err) {
          console.log(values);
          let link = "http://localhost:5000/publishers";
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
          axios.post("http://localhost:5000/publisher", Object.values(values));
          console.log(values);
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
    openModal(){
        this.modalOpen = true
    },
    closeModal(){
      this.modalOpen = false
    }
  },
  async mounted() {
    await axios.get(`http://localhost:5000/publishers`).then(response => {
      const { data } = response;
      this.data = data;
      console.log(this.data);
    });
  }
};
</script>

<style>
.modal{
  position: relative;
 
  }

.modal .modal__over{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  z-index: 40;
  background: rgba(0, 0, 0, 0.6);
}

.modal__content{
  background: #fff;
  width: 400px;
  padding: 20px;
  height: 290px;
  z-index: 100;

  position: fixed;
  top:0;
  left: 50%;
  transform: translate(-50%,13%);

}

.modal__content--edit{
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.modal__content--cancel{
    position: absolute;
    bottom: 20px;
    right: 110px;
}




</style>
