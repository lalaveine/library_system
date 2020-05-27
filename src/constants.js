export const dateFormat = 'MMMM Do YYYY';

export const journalColumns = [
  {
    title: "Entry ID",
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
    title: "Returned",
    dataIndex: "returned",
    key: "returned",
    align: "center",
    scopedSlots: { customRender: 'returned' }
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
    title: "Book ID",
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
    title: "Reader ID",
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
    title: "Edition ID",
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
    title: "Name",
    dataIndex: "library_name",
    key: "library_name",
    align: "center",
  },

  {
    title: "Address",
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
    title: "E-mail",
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
    title: "E-mail",
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


