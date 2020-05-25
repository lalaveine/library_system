module.exports = function (app, client) {
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
        let author_ids = []
        if (!book_exists) {
            // await client.query(`INSERT INTO book (book_title) VALUES ($1)`, [req.body['book_title']]);
            for (key in req.body['authors']) {
                let author = Object.values(req.body['authors'][key]);
                const { rows } =  await client.query(`SELECT author_id FROM author WHERE author_name=$1 AND author_surname=$2 AND author_mid_name=$3`, author);
                if (_.isEmpty(rows)) {
                    res.status(500).send();
                    author_ids = []
                } else {
                    author_ids.push(...Object.values(...rows))
                }
            }
        } else {
            res.status(500).send();
        };

        if (!_.isEmpty(author_ids)) {
            // Add updated values for book
            await client.query(`UPDATE book 
            SET book_title=$1, isbn=$2 bbk=$3
            WHERE book.book_id=$5`
            , req.body)
                .then(() => { res.status(200).send() })
                .catch((err) => {
                res.status(500).send(err)
                });
            let author = Object.values(req.body['authors'][key]);
            const { rows } =  await client.query(`SELECT author_id FROM author WHERE author_name=$1 AND author_surname=$2 AND author_mid_name=$3`, author);
            if (_.isEmpty(rows)) {
                res.status(500).send();
                author_ids = []
            } else {
                author_ids.push(...Object.values(...rows))
            }
        }
        // // Insest new author_book relations
        // if (!_.isEmpty(author_ids)) {
        //     for (id in author_ids) {
        //         await client.query(`
        //         INSERT INTO author_book 
        //             (author_id, book_id) 
        //         VALUES(
        //             $1 
        //             ,(SELECT book_id FROM book WHERE book_title=$2)
        //         );`
        //         , [author_ids[id], req.body['book_title']]);
        //     }
        //     res.status(200).send();
        // }
        
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
        await client.query('UPDATE book_edition SET pub_year = $1, pub_city = (SELECT city_id from city WHERE name=$2), publisher_id = (SELECT publisher_id from publisher WHERE name=$3), taken = $4, library_id = (SELECT library_id from library WHERE name=$5), book_id = (SELECT book_id from books WHERE title=$6)', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
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