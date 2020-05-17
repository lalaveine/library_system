<template>
    <div class="reader-input">
        <h1>City</h1>
        <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
            <a-form-item label="Name of City:">
                <a-input
                        v-decorator="['name', { rules: [{ required: true, message: 'Please input name!' }] }]"
                        placeholder="Input City name"
                />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                <a-button type="primary" html-type="submit" :disabled= "getButtonDisabled()">Submit</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
	const axios = require('axios').default;
	import { Button, Form, Input } from "ant-design-vue";
	import { readerColumns as columns } from "@/constants.js";

	export default {
		name: "BookSearch",
		components: {
			"a-button": Button,
			"a-form": Form,
			"a-input": Input,
			"a-form-item": Form.Item
		},
		data() {
			return {
				formLayout: "horizontal",
				form: this.$form.createForm(this, { name: "add-reader" }),
				data: [],
				columns,
				isButtonDisabled: true
			};
		},
		methods: {
			handleSubmit(e) {
				e.preventDefault();
				this.form.validateFields((err, values) => {
					if (!err) {
						console.log("Received values of form: ", values);

						axios.post('/Readers', values)
							.then(function (response) {
								console.log(response);

							})
							.catch(function (error) {
								console.log(error);
							});
					}
				});
			},
			getButtonDisabled() {
				const fields = this.form.getFieldsValue();
				const keys = Object.keys(this.form.getFieldsValue());
				for (let key of keys) {
					if (
						(key !== "copies" && fields[key]) ||
						(key === "copies" && typeof fields[key] === "number")
					) {
						return false;
					}
				}
				return true;
			}
		}
	};
</script>

<style>
    .ant-form .ant-form-item-label {
        text-align: left;
    }

    .reader-input {
         width: 950px;
        padding: 15px;
    }
</style>