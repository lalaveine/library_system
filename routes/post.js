
module.exports = function (app, client) {
    const _ = require('lodash');
    app.post('/readers', async (req, res) => {
            await client.query('INSERT INTO reader (reader_name, reader_mid_name, reader_surname, reader_email) VALUES ($1,$2,$3,$4)', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.post('/journal', async (req, res) => {
        console.log(req.body)
        await client.query('INSERT INTO journal (reader_id, edition_id, take_date, return_date) VALUES($1,$2,$4,$3)', req.body)
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });
    /* Books POST request example
        {
            "book_title": "30 ночей шахеризады",
            "isbn": "57439287",
            "bbk": "1232532",
            "publisher_name": "Издательство АСТ",
            "pub_year": "1984",
            "authors" : {
                "author_1": {
                    "author_name": "Лев",
                    "author_surname": "Толстой",
                    "author_mid_name": "Николаевич"
                },
                "author_2": {
                    "author_name": "Иммануил",
                    "author_surname": "Кант",
                    "author_mid_name": ""
            }
	}
	
}
    */
    app.post('/books', async (req, res, next) => {
        // This part checks if everything is alright with the data
        // If there is book with the same title program returns 500
        // Secondly if any author listed in the request is not in the database program returns 500
        const { rows } =  await client.query(`SELECT book_id FROM book WHERE book_title=$1`, [req.body['book_title']]);
        let author_ids = []
        book_exists = !_.isEmpty(rows)
        if (!book_exists) {
            for (key in req.body['authors']) {
                let author = req.body['authors'][key];
                console.log(author['author_name'])
                const { rows } =  await client.query('SELECT author_id FROM author WHERE author_name=$1 AND author_surname=$2 AND author_mid_name=$3', [author['author_name'],author['author_surname'], author['author_mid_name']]);
                console.log(rows)
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

        // If the data is ok
        // Program just pushes it to the database
        if (!book_exists && !_.isEmpty(author_ids)) {
            console.log([req.body['pub_year'], req.body['bbk'], req.body['isbn'], req.body['publisher_name'], req.body['book_title']])
            await client.query(`INSERT INTO book 
                                    (pub_year, bbk, isbn, publisher_id, book_title) 
                                VALUES($1, $2, $3, (SELECT publisher_id FROM publisher WHERE publisher_name=$4), $5)`
                            , [req.body['pub_year'], req.body['bbk'], req.body['isbn'], req.body['publisher_name'], req.body['book_title']])
                        .then(() => {
                            for (id in author_ids) {
                                client.query(`
                                    INSERT INTO author_book 
                                        (author_id, book_id) 
                                    VALUES(
                                        $1 
                                        ,(SELECT book_id FROM book WHERE book_title=$2)
                                    );`
                                    , [author_ids[id], req.body['book_title']]);
                                }
                                res.status(200).send();
                        })
                        .catch((err) => {
                            console.log(err)
                            res.status(500).send(err);
                        });
        }
    });

    app.post('/publisher', async (req, res) => {
        await client.query('INSERT INTO publisher (publisher_name, city_id, publisher_email) VALUES($1, (SELECT city_id from city WHERE city_name=$2), $3)', req.body)            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.post('/city', async (req, res) => {
        await client.query('INSERT INTO city (city_name) VALUES($1)', req.body).then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.post('/library', async (req, res) => {
        await client.query('INSERT INTO library (library_name, library_email, city_id, library_address) VALUES($1, $2, (SELECT city_id FROM city WHERE city.city_name = $3), $4)', req.body)            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.post('/editions', async (req, res) => {
        console.log(req.body)
        await client.query(`
                INSERT INTO book_edition 
                    (book_id, library_id, taken) 
                VALUES(
                    (SELECT book_id from book WHERE book_title=$1)
                    , (SELECT library_id from library WHERE library_name=$2)
                    , $3)`
            , [req.body['book_title'], req.body['library_name'], false])
            .then(() => { res.status(200).send() })
            .catch((err) => {
                console.log(err);
                res.status(500).send(err);
            });
    });

    app.post('/authors', async (req, res) => {
        await client.query('INSERT INTO author (author_name, author_mid_name, author_surname) VALUES($1, $2, $3)', req.body)            
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });
}
