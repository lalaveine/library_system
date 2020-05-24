
module.exports = function (app, client) {

    app.post('/reader', async (req, res) => {
        await client.query('INSERT INTO reader (name, middle_name, surname, email) VALUES ($1,$2,$3,$4)', req.body);
    });

    app.post('/journal', async (req, res) => {
        console.log(req.body)
        await client.query('INSERT INTO journal (reader_id, edition_id, take_date, return_date) VALUES((SELECT reader_id from reader WHERE name = $1 AND middle_name = $2 AND surname = $3),$4,$5,$6)', req.body);

    });

    app.post('/book', async (req, res) => {
        await client.query('INSERT INTO book (title, bbk, author_id) VALUES($1, $2, (SELECT author_id from author WHERE (name=$3 AND surname=$4)))', req.body);
    });

    app.post('/publisher', async (req, res) => {
        await client.query('INSERT INTO publisher (name, city_id, email) VALUES($1, (SELECT city_id from city WHERE name=$2), $3)', req.body);
    });

    app.post('/city', async (req, res) => {
        await client.query('INSERT INTO city (name) VALUES($1)', req.body);
    });

    app.post('/library', async (req, res) => {
        await client.query('INSERT INTO library (name, address, email) VALUES($1, $2, $3)', req.body);
    });

    app.post('/edition', async (req, res) => {
        await client.query('INSERT INTO book_edition (pub_year, pub_city, publisher_id, taken, library_id, book_id) VALUES($1, (SELECT city_id from city WHERE name=$2), (SELECT publisher_id from publisher WHERE name=$3), $4, (SELECT library_id from library WHERE name=$5), (SELECT book_id from books WHERE title=$6))', req.body);
    });

    app.post('/author', async (req, res) => {
        await client.query('INSERT INTO author (name, middle_name, surname) VALUES($1, $2, $3)', req.body);
    });
}
