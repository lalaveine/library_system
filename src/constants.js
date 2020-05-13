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
      title: "Book",
      dataIndex: "book",
      key: "book",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Reader",
      dataIndex: "reader",
      key: "reader",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "age"
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
      dataIndex: "id",
      key: "id",
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
      dataIndex: "age",
      key: "age"
    },
    {
      title: "E-mail",
      dataIndex: "mail",
      key: "address 1",
      ellipsis: true
    }
  ];

