export const dateFormat = 'DD-MM-YYYY';

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
      dataIndex: "entry_id",
      key: "entry_id"
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
      title: "Surname",
      dataIndex: "surname",
      key: "surname"
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
      key: "take_date"
    },
    {
      title: "Return date",
      dataIndex: "return_date",
      key: "return_date"
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

  export const authorColumns = [
    {
      title: "ID",
      dataIndex: "author_id",
      key: "author_id",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Middle name",
      dataIndex: "middle_name",
      key: "middle_name",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname"
    }
   
    
  ];

  export const cityColumns = [
    {
      title: "ID",
      dataIndex: "city_id",
      key: "reader_id",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      scopedSlots: { customRender: "name" }
    }
   
    
  ];

  export const editionsColumns = [
    {
      title: "ID",
      dataIndex: "edition_id",
      key: "edition_id",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "publisher year",
      dataIndex: "pub_year",
      key: "name",
      scopedSlots: { customRender: "name" }
    },

    {
      title: "publisher city",
      dataIndex: "pub_city",
      key: "name",
      scopedSlots: { customRender: "name" }
    },

    {
      title: "publisher id",
      dataIndex: "publisher_id",
      key: "name",
      scopedSlots: { customRender: "name" }
    },

    {
      title: "library id",
      dataIndex: "library_id",
      key: "name",
      scopedSlots: { customRender: "name" }
    },

    {
      title: "book id",
      dataIndex: "book_id",
      key: "name",
      scopedSlots: { customRender: "name" }
    }
   
    
  ];

  export const libraryColumns = [
    {
      title: "ID",
      dataIndex: "library_id",
      key: "library_id",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      scopedSlots: { customRender: "name" }
    },

    {
      title: "address",
      dataIndex: "address",
      key: "name",
      scopedSlots: { customRender: "name" }
    },

    {
      title: "email",
      dataIndex: "email",
      key: "name",
      scopedSlots: { customRender: "name" }
    }
  ];

  
  export const publisherColumns = [
    {
      title: "ID",
      dataIndex: "publisher_id",
      key: "name",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      scopedSlots: { customRender: "name" }
    },
    {
      title: "City ID",
      dataIndex: "city_id",
      key: "city_id",
      scopedSlots: { customRender: "name" }
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "name",
      scopedSlots: { customRender: "name" }
    }

  ];

