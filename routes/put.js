module.exports = function (app, client) {
    app.put('/readers/:id', async (req, res) => {
        await client.query('UPDATE reader SET name = $3, middle_name = $4, surname = $2, email = $5 WHERE reader_id = $1', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.put('/journal/:id', async (req, res) => {
        console.log(req.body)
        await client.query('UPDATE journal SET reader_id = (SELECT reader_id from reader WHERE name = $2 AND middle_name = $3 AND surname = $4), edition_id = $5, take_date = $6, return_date = $7 WHERE entry_id=$1', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.put('/books/:id', async (req, res) => {
        await client.query('UPDATE book SET title=$1, bbk=$2, author_id = (SELECT author_id FROM author WHERE name=$3 AND middle_name=$4 AND surname=$5) WHERE book.book_id=$5', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.put('/publishers/:id', async (req, res) => {
        await client.query('UPDATE publisher SET publisher_name = $2, city_id = (SELECT city_id from city WHERE city_name=$3), publisher_email = $4 WHERE publisher_id = $1', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.put('/cities/:id', async (req, res) => {
        await client.query('UPDATE city SET name = $2 WHERE city_id=$1', req.body)
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
        await client.query('UPDATE library SET library_name=$2, library_email=$4, library_address=$3 WHERE library_id=$1', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.put('/authors/:id', async (req, res) => {
        await client.query('UPDATE author SET name = $3, middle_name = $4, surname = $2 WHERE author_id=$1', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });
}