
module.exports = function (app, client) {
    const _ = require('lodash');
    app.post('/reader', async (req, res) => {
        await client.query('INSERT INTO reader (name, middle_name, surname, email) VALUES ($1,$2,$3,$4)', req.body);
    });

    app.post('/journal', async (req, res) => {
        console.log(req.body)
        await client.query('INSERT INTO journal (reader_id, edition_id, take_date, return_date) VALUES((SELECT reader_id from reader WHERE name = $1 AND middle_name = $2 AND surname = $3),$4,$5,$6)', req.body);

    });
    /* Books POST request example
        {
            "book_title": "30 ночей шахеризады",
            "authors" : {
                "author_1": {
                    "author_name": "Виктор",
                    "author_surname": "Толстой",
                    "author_mid_name": "Николаевич"
                },
                "author_2": {
                    "author_name": "Алексей",
                    "author_surname": "Толстой",
                    "author_mid_name": "Николаевич"
                }
            }
        }
    */
    app.post('/books', async (req, res) => {
        // This part checks if everything is alright with the data
        // If there is book with the same title program returns 500
        // Secondly if any author listed in the request is not in the database program returns 500
        const { rows } =  await client.query(`SELECT book_id FROM book WHERE book_title=$1`, [req.body['book_title']]);
        // console.log(...book_id.rows)
        let author_ids = []
        book_exists = !_.isEmpty(rows)
        if (!book_exists) {
            // await client.query(`INSERT INTO book (book_title) VALUES ($1)`, [req.body['book_title']]);
            for (key in req.body['authors']) {
                let author = Object.values(req.body['authors'][key])
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

        // If the data is ok
        // Program just pushes it to the database
        if (!book_exists && !_.isEmpty(author_ids)) {
            await client.query(`INSERT INTO book (book_title) VALUES ($1);`, [req.body['book_title']]);
            for (id in author_ids) {
                await client.query(`
                INSERT INTO author_book 
                    (author_id, book_id) 
                VALUES(
                    $1 
                    ,(SELECT book_id FROM book WHERE book_title=$2)
                );`
                , [author_ids[id], req.body['book_title']]);
            }
            res.status(200).send();
        }
    });

    app.post('/publisher', async (req, res) => {
        await client.query('INSERT INTO publisher (publisher_name, city_id, publisher_email) VALUES($1, (SELECT city_id from city WHERE city_name=$2), $3)', req.body);
    });

    app.post('/city', async (req, res) => {
        await client.query('INSERT INTO city (name) VALUES($1)', req.body);
    });

    app.post('/library', async (req, res) => {
        await client.query('INSERT INTO library (library_name, library_email, city_id, library_address) VALUES($1, $2, (SELECT city_id FROM city WHERE city.city_name = $3), $4)', req.body);
    });

    app.post('/edition', async (req, res) => {
        await client.query('INSERT INTO book_edition (pub_year, pub_city, publisher_id, taken, library_id, book_id) VALUES($1, (SELECT city_id from city WHERE name=$2), (SELECT publisher_id from publisher WHERE name=$3), $4, (SELECT library_id from library WHERE name=$5), (SELECT book_id from books WHERE title=$6))', req.body);
    });

    app.post('/author', async (req, res) => {
        await client.query('INSERT INTO author (name, middle_name, surname) VALUES($1, $2, $3)', req.body);
    });
}
