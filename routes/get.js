
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
        let query = 'SELECT name, middle_name, surname, title, bbk from author, book where author.author_id = book.author_id ';
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
        let query = 'SELECT edition_id, pub_year, publisher.name as publisher, title, library.name as library from book_edition, library, publisher, book where publisher.publisher_id = book_edition.publisher_id AND  library.library_id = book_edition.library_id AND  book.book_id = book_edition.book_id';
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
        let query = 'SELECT entry_id, reader.reader_id, name, middle_name, surname, journal.edition_id, title, take_date, return_date FROM journal, reader, book where book.book_id = (SELECT book_id from book_edition where book_edition.edition_id = journal.edition_id) AND  journal.reader_id = reader.reader_id ';
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
        let query = 'SELECT publisher_id, publisher.name as publisher, city.name as city, email FROM publisher, city WHERE city.city_id = publisher.city_id ';
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