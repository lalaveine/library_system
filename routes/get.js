
module.exports = function (app, client) {
    const _ = require('lodash');
    app.get('/readers', async (req, res) => {
        let query = 'SELECT * FROM reader ';
        if (!_.isEmpty(req.query)) {
            query += ' WHERE '
            for (key in req.query) {
                if (key == 'reader_id') {
                    query += `${key}=${req.query[key]} AND `
                } else {
                    query += `${key}='${req.query[key]}' AND `
                }
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        if (_.isEmpty(rows)) {
            res.status(404).send("Readers is not found.");
        } else {
            res.send(rows);    
        }
    });

    app.get('/books', async (req, res) => {
        let query = `
        SELECT
        book.book_id,
        book.book_title,
        book.isbn,
        book.bbk,
        book.pub_year,
        array_agg(distinct publisher_name) AS publisher_name,
        (SELECT COUNT(*) FROM book_edition WHERE book_edition.book_id = book.book_id) AS book_count,
        array_agg(author.author_id) AS author_ids,
        array_agg(author.author_name || ' ' || author.author_mid_name || ' ' || author.author_surname) AS authors
        FROM
            book
        INNER JOIN 
            publisher 
            ON publisher.publisher_id = book.publisher_id
        INNER JOIN
            author_book
            ON book.book_id = author_book.book_id
        INNER JOIN
            author
            ON author.author_id = author_book.author_id
        `
        if (!_.isEmpty(req.query)) {
            query += ' WHERE '
            for (key in req.query) {
                if (key == 'book-book_id') {
                    query += `${key.replace('-','.')}=${req.query[key]} AND `
                } else {
                    query += `${key.replace('-','.')}='${req.query[key]}' AND `
                }
                // query += `${key.replace('-','.')} = ${isNaN(Number(req.query[key])) ? `'${req.query[key]}'` : req.query[key] } AND `;
            };
            query = query.slice(0, -4);
        };
        query += 'GROUP BY book.book_id'
        const { rows } = await client.query(query);
        if (_.isEmpty(rows)) {
            res.status(404).send("Book is not found.")
        } else {
            res.send(rows);    
        }
    });

    app.get('/editions', async (req, res) => {
        // console.log(await client.query('SELECT publisher.city_id from publisher, book_edition WHERE publisher.publisher_id = book_edition.publisher_id'))
        let query = `
            SELECT 
                edition_id
                , book_title
                , library_name
                , taken
            FROM book_edition
            INNER JOIN
                book
                ON book_edition.book_id = book.book_id
            INNER JOIN
                library
                ON book_edition.library_id = library.library_id`;
        if (!_.isEmpty(req.query)) {
            query += ' WHERE '
            for (key in req.query) {
                if (key == 'edition_id') {
                    query += `${key}=${req.query[key]} AND `
                } else {
                    query += `${key.replace('-','.')}='${req.query[key]}' AND `
                }
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        if (_.isEmpty(rows)) {
            res.status(404).send("Edition is not found.")
        } else {
            res.send(rows);    
        }
    });

    app.get('/journal', async (req, res) => { 
        let query = `SELECT entry_id, reader.reader_id, reader_name, reader_mid_name, reader_surname, journal.edition_id, book_title, take_date, return_date, returned 
                    FROM journal, reader, book 
                    WHERE book.book_id = (
                        SELECT book_id from book_edition 
                        WHERE book_edition.edition_id = journal.edition_id
                    ) 
                    AND journal.reader_id = reader.reader_id `;
        if (!_.isEmpty(req.query)) {
            query += ' AND '
            for (key in req.query) {
                if (key == 'reader-reader_id' || key == 'edition_id') {
                    query += `${key.replace('-','.')}=${req.query[key]} AND `
                } else if (key == 'take_date' || key == 'return_date') {
                    query += ` date_trunc('day', ${key})='${req.query[key].substring(0, req.query[key].indexOf("T"))}' AND `
                }
                else {
                    query += `${key}='${req.query[key]}' AND `
                }
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        if (_.isEmpty(rows)) {
            res.status(404).send("Journal entry is not found.")
        } else {
            res.send(rows);    
        }
    });

    app.get('/cities', async (req, res) => {
        let query = 'SELECT * FROM city ';
        if (!_.isEmpty(req.query)) {
            query += ' WHERE '
            for (key in req.query) {
                query += `${key}='${req.query[key]}' AND `
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        if (_.isEmpty(rows)) {
            res.status(404).send("City is not found.")
        } else {
            res.send(rows);    
        }
    });

    app.get('/libraries', async (req, res) => {
        let query = `
            SELECT 
                library_name
                , library_id
                , library_address
                , city_name
                , library_email 
                , (SELECT COUNT(*) FROM book_edition WHERE book_edition.library_id = library.library_id) AS book_count
            FROM 
                library
                , city 
            WHERE city.city_id = library.city_id`;

        if (!_.isEmpty(req.query)) {
            query += ' AND '
            for (key in req.query) {
                query += `${key}='${req.query[key]}' AND `
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        if (_.isEmpty(rows)) {
            res.status(404).send("Library is not found.")
        } else {
            res.send(rows);    
        }
    });

    app.get('/publishers', async (req, res) => {
        let query = 'SELECT publisher_id, publisher_name, city_name, publisher_email FROM publisher, city WHERE city.city_id = publisher.city_id ';
        if (!_.isEmpty(req.query)) {
            query += ' AND '
            for (key in req.query) {
                query += `${key}='${req.query[key]}' AND `
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        if (_.isEmpty(rows)) {
            res.status(404).send("Publisher is not found.")
        } else {
            res.send(rows);    
        }
    });

    app.get('/authors', async (req, res) => {
        let query = 'SELECT * FROM author ';
        if (!_.isEmpty(req.query)) {
            query += ' WHERE '
            for (key in req.query) {
                query += `${key}='${req.query[key]}' AND `
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        if (_.isEmpty(rows)) {
            res.status(404).send("Author is not found.")
        } else {
            res.send(rows);    
        }
    });
}