import notification from "ant-design-vue";

openNotificationWithIcon(type, message, description) {
    notification[type]({
      message: message,
      description: description
    })
};