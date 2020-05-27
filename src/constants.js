export const dateFormat = 'MMMM Do YYYY';

export const journalColumns = [
  {
    title: "Entry ID",
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
    dataIndex: "reader_surname",
    key: "reader_surname"
  },
  {
    title: "Name",
    dataIndex: "reader_name",
    key: "reader_name"
  },
  {
    title: "Middle name",
    dataIndex: "reader_mid_name",
    key: "reader_mid_name"
  },

  {
    title: "Title",
    dataIndex: "book_title",
    key: "book_title"
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
    title: "Book ID",
    dataIndex: "book_id",
    key: "name",
  },
  {
    title: "Title",
    dataIndex: "book_title",
    key: "book_title",
  },
  {
    title: "Quantity",
    dataIndex: "book_count",
    key: "book_count"
  },
  {
    title: "Author",
    dataIndex: "authors",
    key: "authors",
    scopedSlots: { customRender: 'authors' }
  },
  {
    title: "ISBN",
    dataIndex: "isbn",
    key: "isbn"
  },
  {
    title: "ББК",
    dataIndex: "bbk",
    key: "bbk"
  },
  {
    title: "Publishing year",
    dataIndex: "pub_year",
    key: "pub_year"
  },
  {
    title: "Publisher name",
    dataIndex: "publisher_name",
    key: "publisher_name"
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
    title: "Reader ID",
    dataIndex: "reader_id",
    key: "reader_id",
  },
  {
    title: "Name",
    dataIndex: "reader_name",
    key: "reader_name",
  },
  {
    title: "Surname",
    dataIndex: "reader_surname",
    key: "reader_surname"
  },
  {
    title: "Middle name",
    dataIndex: "reader_mid_name",
    key: "reader_mid_name",
  },
  {
    title: "E-mail",
    dataIndex: "reader_email",
    key: "reader_email",
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
    title: "Name",
    dataIndex: "author_name",
    key: "author_name",
  },
  {
    title: "Middle name",
    dataIndex: "author_mid_name",
    key: "author_mid_name",
  },
  {
    title: "Surname",
    dataIndex: "author_surname",
    key: "author_surname"
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
    title: "Name",
    dataIndex: "city_name",
    key: "city_name",
    width: '33%',
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    width: '33%',
    scopedSlots: { customRender: 'action' }
  }
];


export const editionsColumns = [
  {
    title: "Edition ID",
    dataIndex: "edition_id",
    key: "edition_id",
  },
  {
    title: "Title",
    dataIndex: "book_title",
    key: "book_title",

  },
  {
    title: "Library",
    dataIndex: "library_name",
    key: "library_name",
  },
  {
    title: "Taken",
    dataIndex: "taken",
    key: "taken",
    scopedSlots: { customRender: 'taken' }
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
    title: "Name",
    dataIndex: "library_name",
    key: "library_name",
  },

  {
    title: "Address",
    dataIndex: "library_address",
    key: "library_address",
  },
  {
    title: "City",
    dataIndex: "city_name",
    key: "city_name",
  },
  {
    title: "E-mail",
    dataIndex: "library_email",
    key: "library_email",
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
    title: "Name",
    dataIndex: "publisher_name",
    key: "publisher_name",
  },
  {
    title: "City",
    dataIndex: "city_name",
    key: "city_name",
  },

  {
    title: "E-mail",
    dataIndex: "publisher_email",
    key: "publisher_email",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    scopedSlots: { customRender: 'action' }
  }
];


