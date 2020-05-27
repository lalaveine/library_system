export const dateFormat = 'MMMM Do YYYY';

export const journalColumns = [
  {
    title: "ID",
    dataIndex: "entry_id",
    key: "entry_id",
    align: "center"
  },
  {
    title: "Reader ID",
    dataIndex: "reader_id",
    key: "reader_id",
    align: "center"
  },
  {
    title: "Surname",
    dataIndex: "reader_surname",
    key: "reader_surname",
    align: "center"
  },
  {
    title: "Name",
    dataIndex: "reader_name",
    key: "reader_name",
    align: "center"
  },
  {
    title: "Middle name",
    dataIndex: "reader_mid_name",
    key: "reader_mid_name",
    align: "center"
  },

  {
    title: "Title",
    dataIndex: "book_title",
    key: "book_title",
    align: "center"
  },
  {
    title: "Edition ID",
    dataIndex: "edition_id",
    key: "edition_id",
    align: "center"
  },
  {
    title: "Take date",
    dataIndex: "take_date",
    key: "take_date",
    align: "center",
    scopedSlots: { customRender: 'take_date' }
  },
  {
    title: "Return date",
    dataIndex: "return_date",
    key: "return_date",
    align: "center",
    scopedSlots: { customRender: 'return_date' }
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    scopedSlots: { customRender: 'action' }
  }
];


export const bookColumns = [
  {
    title: "Book Id",
    dataIndex: "book_id",
    key: "name",
    align: "center"
  },
  {
    title: "Title",
    dataIndex: "book_title",
    key: "book_title",
    align: "center"
  },
  {
    title: "Quantity",
    dataIndex: "book_count",
    key: "book_count",
    align: "center"
  },
  {
    title: "Author",
    dataIndex: "authors",
    key: "authors",
    align: "center",
    scopedSlots: { customRender: 'authors' }
  },
  {
    title: "ISBN",
    dataIndex: "isbn",
    key: "isbn",
    align: "center"
  },
  {
    title: "ББК",
    dataIndex: "bbk",
    key: "bbk",
    align: "center"
  },
  {
    title: "Publishing year",
    dataIndex: "pub_year",
    key: "pub_year",
    align: "center"
  },
  {
    title: "Publisher name",
    dataIndex: "publisher_name",
    key: "publisher_name",
    align: "center"
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    scopedSlots: { customRender: 'action' }
  }
];


export const readerColumns = [
  {
    title: "ID",
    dataIndex: "reader_id",
    key: "reader_id",
    align: "center"
  },
  {
    title: "Name",
    dataIndex: "reader_name",
    key: "reader_name",
    align: "center"
  },
  {
    title: "Surname",
    dataIndex: "reader_surname",
    key: "reader_surname",
    align: "center"
  },
  {
    title: "Middle name",
    dataIndex: "reader_mid_name",
    key: "reader_mid_name",
    align: "center"
  },
  {
    title: "E-mail",
    dataIndex: "reader_email",
    key: "reader_email",
    ellipsis: true,
    align: "center"
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    scopedSlots: { customRender: 'action' }
  }
];


export const authorColumns = [
  {
    title: "Name",
    dataIndex: "author_name",
    key: "author_name",
    align: "center"
  },
  {
    title: "Middle name",
    dataIndex: "author_mid_name",
    key: "author_mid_name",
    align: "center"
  },
  {
    title: "Surname",
    dataIndex: "author_surname",
    key: "author_surname",
    align: "center"
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    scopedSlots: { customRender: 'action' }
  }
];


export const cityColumns = [
  {
    title: "ID",
    dataIndex: "city_id",
    key: "reader_id",
    width: '33%',
    align: "center",
  },
  {
    title: "Name",
    dataIndex: "city_name",
    key: "city_name",
    width: '33%',
    align: "center",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    width: '33%',
    align: "center",
    scopedSlots: { customRender: 'action' }
  }
];


export const editionsColumns = [
  {
    title: "ID",
    dataIndex: "edition_id",
    key: "edition_id",
    align: "center",
  },
  {
    title: "Title",
    dataIndex: "book_title",
    key: "book_title",
    align: "center",

  },
  {
    title: "Library",
    dataIndex: "library_name",
    key: "library_name",
    align: "center",
  },
  {
    title: "Taken",
    dataIndex: "taken",
    key: "taken",
    align: "center",
    scopedSlots: { customRender: 'taken' }
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    scopedSlots: { customRender: 'action' }
  }
];


export const libraryColumns = [
  {
    title: "ID",
    dataIndex: "library_id",
    key: "library_id",
    align: "center",
  },
  {
    title: "name",
    dataIndex: "library_name",
    key: "library_name",
    align: "center",
  },

  {
    title: "address",
    dataIndex: "library_address",
    key: "library_address",
    align: "center",
  },
  {
    title: "City",
    dataIndex: "city_name",
    key: "city_name",
    align: "center",
  },
  {
    title: "email",
    dataIndex: "library_email",
    key: "library_email",
    align: "center",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    scopedSlots: { customRender: 'action' }
  }
];


export const publisherColumns = [
  {
    title: "ID",
    dataIndex: "publisher_id",
    key: "publisher_id",
    align: "center",
  },
  {
    title: "Name",
    dataIndex: "publisher_name",
    key: "publisher_name",
    align: "center",
  },
  {
    title: "City",
    dataIndex: "city_name",
    key: "city_name",
    align: "center",
  },

  {
    title: "Email",
    dataIndex: "publisher_email",
    key: "publisher_email",
    align: "center",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    scopedSlots: { customRender: 'action' }
  }
];


