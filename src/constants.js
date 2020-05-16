export const bookColumns = [
    {
      title: "Book name",
      dataIndex: "name",
      key: "name",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Publish year",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "BBK",
      dataIndex: "address",
      key: "address 1",
      ellipsis: true
    },
    {
      title: "Addresses",
      dataIndex: "addressess",
      key: "address 3",
      ellipsis: true
    },
    {
      title: "Author",
      dataIndex: "address",
      key: "address 2",
      ellipsis: true
    },
    {
      title:"Action",
      // key:"action",
      // render: (text, record) => (<button> TEST </button>
      //   )
    }
  ];

  export const journalColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Name",
      dataIndex: "book",
      key: "book",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Middle name",
      dataIndex: "reader",
      key: "reader",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Surname",
      dataIndex: "date",
      key: "age"
    },
    {
      title: "title",
      dataIndex: "mail",
      key: "address 1",
      ellipsis: true
    },
    {
      title: "data",
      dataIndex: "mail",
      key: "address 1",
      ellipsis: true
    },
    {
      title: "Return date",
      dataIndex: "mail",
      key: "address 1",
      ellipsis: true
    }
  ];

  export const readerColumns = [
    {
      title: "ID",
      dataIndex: "reader_id",
      key: "reader_id",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname"
    },
    {
      title: "Middle name",
      dataIndex: "middle_name",
      key: "middle_name",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
      ellipsis: true
    }
  ];

