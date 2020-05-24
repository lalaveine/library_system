
module.exports = function (app, client) {
    const _ = require('lodash');
    app.get('/readers', async (req, res) => {
        let query = 'SELECT * FROM reader ';
        if (!_.isEmpty(req.query)) {
            query += ' WHERE '
            for (key in req.query) {
                query += `${key} = ${isNaN(Number(req.query[key])) ? `'${req.query[key]}'` : req.query[key] } AND `
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        res.send(rows);
    });

    app.get('/books', async (req, res) => {
        let query = 'SELECT name, middle_name, surname, title, bbk from author, book WHERE author.author_id = book.author_id ';
        if (!_.isEmpty(req.query)) {
            query += ' AND '
            for (key in req.query) {
                query += `${key} = ${isNaN(Number(req.query[key])) ? `'${req.query[key]}'` : req.query[key] } AND `
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        res.send(rows);
    });

    app.get('/editions', async (req, res) => {
        console.log(await client.query('SELECT publisher.city_id from publisher, book_edition WHERE publisher.publisher_id = book_edition.publisher_id'))
        let query = 'SELECT edition_id, city.name as city, pub_year, publisher.name as publisher, title, library.name as library from book_edition, library, publisher, book, city WHERE publisher.publisher_id = book_edition.publisher_id AND  library.library_id = book_edition.library_id AND  book.book_id = book_edition.book_id and city.city_id = (SELECT publisher.city_id from publisher, book_edition WHERE publisher.publisher_id = book_edition.publisher_id)';
        if (!_.isEmpty(req.query)) {
            query += ' AND '
            for (key in req.query) {
                query += `${key} = ${isNaN(Number(req.query[key])) ? `'${req.query[key]}'` : req.query[key] } AND `
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        res.send(rows);
    });

    app.get('/journal', async (req, res) => { 
        let query = `SELECT entry_id, reader.reader_id, name, middle_name, surname, journal.edition_id, title, take_date, return_date 
                    FROM journal, reader, book 
                    WHERE 
                    book.book_id = (SELECT book_id from book_edition 
                        WHERE book_edition.edition_id = journal.edition_id) 
                    AND  journal.reader_id = reader.reader_id `;
        if (!_.isEmpty(req.query)) {
            query += ' AND '
            for (key in req.query) {
                query += `${key} = ${isNaN(Number(req.query[key])) ? `'${req.query[key]}'` : req.query[key] } AND `
            };
            query = query.slice(0, -4);
        };
        console.log(query)
        const { rows } = await client.query(query);
        res.send(rows);
    });

    app.get('/cities', async (req, res) => {
        let query = 'SELECT * FROM city ';
        if (!_.isEmpty(req.query)) {
            query += ' WHERE '
            for (key in req.query) {
                query += `${key} = ${isNaN(Number(req.query[key])) ? `'${req.query[key]}'` : req.query[key] } AND `
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        res.send(rows);
    });

    app.get('/libraries', async (req, res) => {
        let query = 'SELECT * FROM library ';
        if (!_.isEmpty(req.query)) {
            query += ' WHERE '
            for (key in req.query) {
                query += `${key} = ${isNaN(Number(req.query[key])) ? `'${req.query[key]}'` : req.query[key] } AND `
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        res.send(rows);
    });

    app.get('/publishers', async (req, res) => {
        let query = 'SELECT publisher_id, publisher_name, city_name as city, email FROM publisher, city WHERE city.city_id = publisher.city_id ';
        if (!_.isEmpty(req.query)) {
            query += ' AND '
            for (key in req.query) {
                query += `${key} = ${isNaN(Number(req.query[key])) ? `'${req.query[key]}'` : req.query[key] } AND `
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        res.send(rows);
    });

    app.get('/authors', async (req, res) => {
        let query = 'SELECT * FROM author ';
        if (!_.isEmpty(req.query)) {
            query += ' WHERE '
            for (key in req.query) {
                query += `${key} = ${isNaN(Number(req.query[key])) ? `'${req.query[key]}'` : req.query[key] } AND `
            };
            query = query.slice(0, -4);
        };
        const { rows } = await client.query(query);
        res.send(rows);
    });
}