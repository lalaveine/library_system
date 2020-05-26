module.exports = function (app, client) {
    const _ = require('lodash');
    app.put('/readers/:id', async (req, res) => {
        await client.query('UPDATE reader SET reader_name = $3, reader_mid_name = $4, reader_surname = $2, reader_email = $5 WHERE reader_id = $1', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.put('/journal/:id', async (req, res) => {
        console.log(req.body)
        await client.query(`
            UPDATE journal 
            SET reader_id = 
                (
                    SELECT 
                        reader_id from reader WHERE reader_name = $2 
                    AND 
                        reader_mid_name = $3 AND reader_surname = $4
                )
            , edition_id = $5
            , take_date = $6
            , return_date = $7 
            WHERE entry_id=$1`, req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                console.log(err)
                res.status(500).send(err);
            });
    });

    app.put('/books/:id', async (req, res) => {
        let req_ids = []
        // await client.query(`INSERT INTO book (book_title) VALUES ($1)`, [req.body['book_title']]);
        for (key in req.body['authors']) {
            let author = req.body['authors'][key];
            const { rows } =  await client.query('SELECT author_id FROM author WHERE author_name=$1 AND author_surname=$2 AND author_mid_name=$3', [author['author_name'],author['author_surname'], author['author_mid_name']]);
            console.log(...rows)
            if (_.isEmpty(rows)) {
                res.status(500).send();
                req_ids = []
            } else {
                req_ids.push(...Object.values(...rows))
            }
        }
        
        
        if (!_.isEmpty(req_ids)) {
            const { rows } =  await client.query(`
                    SELECT array_agg(author.author_id) AS author_ids
                    FROM book 
                    INNER JOIN
                        author_book
                        ON book.book_id = author_book.book_id
                    INNER JOIN
                        author
                        ON author.author_id = author_book.author_id
                    WHERE book.book_id = $1
                    GROUP BY book.book_id
                `, [req.body['book_id']]);
            console.log(rows)
            cur_ids = Object.values(...rows)[0];
            to_be_deleted = cur_ids.filter(x => !req_ids.includes(x));
            to_be_added = req_ids.filter(x => !cur_ids.includes(x));

            to_be_deleted.forEach(async (id) => {
                console.log("Delete this", id)
                await client.query('DELETE FROM author_book WHERE author_id = $1 AND book_id = $2', [id, req.body['book_id']]);
            });
            
            to_be_added.forEach(async (id) => {
                console.log("Add this", id)
                await client.query('INSERT INTO author_book (author_id, book_id) VALUES ($1, $2)', [id, req.body['book_id']]);
            });
            
            // Add updated values for book
            await client.query(`
                    UPDATE book 
                        SET 
                            book_title=$1
                            , isbn=$2
                            , bbk=$3
                            , pub_year=$4
                            , publisher_id=(SELECT publisher_id FROM publisher WHERE publisher_name=$5)
                        WHERE 
                            book.book_id=$6`
                    , [
                        req.body['book_title']
                        , req.body['isbn']
                        , req.body['isbn']
                        , req.body['pub_year']
                        , req.body['publisher_name']
                        , req.body['book_id']
                    ]
                ).then(() => { res.status(200).send() })
                .catch((err) => {
                        res.status(500).send(err)
                    });
        }    
    });

    app.put('/publishers/:id', async (req, res) => {
        await client.query('UPDATE publisher SET publisher_name = $2, city_id = (SELECT city_id from city WHERE city_name=$3), publisher_email = $4 WHERE publisher_id = $1', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.put('/cities/:id', async (req, res) => {
        await client.query('UPDATE city SET city_name = $2 WHERE city_id=$1', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.put('/editions/:id', async (req, res) => {
        console.log(req.body)
        await client.query(`
                UPDATE book_edition 
                SET 
                    taken = $1
                    , library_id = (SELECT library_id from library WHERE library_name=$2)
                    , book_id = (SELECT book_id from book WHERE book_title=$3)
                WHERE edition_id=$4`
            , [req.body['taken'], req.body['library_name'], req.body['book_title'], req.body['edition_id']])
            .then(() => { res.status(200).send() })
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            });
    });

    app.put('/libraries/:id', async (req, res) => {
        await client.query('UPDATE library SET library_name=$2, library_email=$5, library_address=$3, city_id = (SELECT city_id FROM city WHERE city_name = $4) WHERE library_id=$1', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.put('/authors/:id', async (req, res) => {
        await client.query('UPDATE author SET author_name = $3, author_mid_name = $4, author_surname = $2 WHERE author_id=$1', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });
}