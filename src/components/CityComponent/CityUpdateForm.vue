 <template>
  <a-modal
    :visible="visible"
    title="Edit reader information"
    okText="Update"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('update') }"
  >
    <a-form layout="horizontal" :form="form">
      <a-form-item label="City ID">
        <a-input-number disabled="disabled" v-decorator="['city_id']" />
      </a-form-item>
      <a-form-item label="City Name">
        <a-input
          v-decorator="[
                'name',
                {
                rules: [{ required: true, message: 'Please enter a city name!' }],
                }
            ]"
          placeholder="City name"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { Form, Input, Modal, DatePicker, InputNumber } from "ant-design-vue";

export default {
  name: "CityUpdateForm",
  props: [
    "visible",
    "name",
    "city_id"
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
          city_id: this.$form.createFormField({
            ...this.city_id,
            value: this.city_id
          }),
          name: this.$form.createFormField({
            ...this.name,
            value: this.name
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
    city_id() {
      this.form.updateFields({
        city_id: this.$form.createFormField({
          ...this.city_id,
          value: this.city_id
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
    }
  }
};
</script>