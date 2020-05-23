export const dateFormat = 'DD-MM-YYYY';

export const journalColumns = [
  {
    title: "ID",
    dataIndex: "entry_id",
    key: "entry_id"
  },
  {
    title: "Reader ID",
    dataIndex: "reader_id",
    key: "reader_id"
  },
  {
    title: "Surname",
    dataIndex: "surname",
    key: "surname"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Middle name",
    dataIndex: "middle_name",
    key: "middle_name"
  },
  
  {
    title: "Title",
    dataIndex: "title",
    key: "title"
  },
  {
    title: "Edition ID",
    dataIndex: "edition_id",
    key: "edition_id"
  },
  {
    title: "Take date",
    dataIndex: "take_date",
    key: "take_date",
    scopedSlots: { customRender: 'take_date' }
  },
  {
    title: "Return date",
    dataIndex: "return_date",
    key: "return_date",
    scopedSlots: { customRender: 'return_date' }
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    scopedSlots: { customRender: 'action' }
  }
];


export const bookColumns = [
    {
      title: "Book Id",
      dataIndex: "book_id",
      key: "name",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "BBK",
      dataIndex: "bbk",
      key: "address 1",
      ellipsis: true
    },
    {
      title: "Author Id",
      dataIndex: "name",
      key: "address 3",
      ellipsis: true
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      scopedSlots: { customRender: 'action' }
    }
  ];


  export const readerColumns = [
    {
      title: "ID",
      dataIndex: "reader_id",
      key: "reader_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
      ellipsis: true
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      scopedSlots: { customRender: 'action' }
    }
  ];


  export const authorColumns = [
    {
      title: "ID",
      dataIndex: "author_id",
      key: "author_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Middle name",
      dataIndex: "middle_name",
      key: "middle_name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname"
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      scopedSlots: { customRender: 'action' }
    }
  ];


  export const cityColumns = [
    {
      title: "ID",
      dataIndex: "city_id",
      key: "reader_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      scopedSlots: { customRender: 'action' }
    }
  ];


  export const editionsColumns = [
    {
      title: "ID",
      dataIndex: "edition_id",
      key: "edition_id",
    },
    {
      title: "publisher year",
      dataIndex: "pub_year",
      key: "pub_year",
    },

    {
      title: "publisher city",
      dataIndex: "pub_city",
      key: "pub_city",
    },

    {
      title: "publisher id",
      dataIndex: "publisher_id",
      key: "publisher_id",
    },

    {
      title: "library id",
      dataIndex: "library_id",
      key: "library_id",
    },
    {
      title: "book id",
      dataIndex: "book_id",
      key: "book_id",

    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      scopedSlots: { customRender: 'action' }
    }
  ];


  export const libraryColumns = [
    {
      title: "ID",
      dataIndex: "library_id",
      key: "library_id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "address",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      scopedSlots: { customRender: 'action' }
    }
  ];

  
  export const publisherColumns = [
    {
      title: "ID",
      dataIndex: "publisher_id",
      key: "publisher_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      scopedSlots: { customRender: 'action' }
    }
  ];

   
