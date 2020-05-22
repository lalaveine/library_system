module.exports = function (app, client) {
    app.put('/readers/:id', async (req, res) => {
        const parameters = [...Object.values(req.body), req.params.id];
        await client.query('UPDATE reader SET name = $1, middle_name = $2, surname = $3, email = $4 WHERE reader.reader_id = $5', parameters);
    });

    app.put('/journals/:id', async (req, res) => {
        const parameters = [...Object.values(req.body), req.params.id];
        await client.query('UPDATE journal SET reader_id = (SELECT reader_id from reader WHERE name = $3 AND middle_name = $4 AND surname = $2), edition_id = $5, take_date = $6, return_date = $7', parameters);
    });

    app.put('/books/:id', async (req, res) => {
        const parameters = [...Object.values(req.body), req.params.id];
        await client.query('UPDATE book SET title=$1, bbk=$2, author_id = (SELECT author_id FROM author WHERE name=$3 AND middle_name=$4 AND surname=$5) WHERE book.book_id=$5', parameters);
    });

    app.put('/publisher/:id', async (req, res) => {
        const parameters = [...Object.values(req.body), req.params.id];
        await client.query('UPDATE publisher SET publisher name = $1, city_id = (SELECT city_id from city WHERE name=$2), email = $3', parameters);
    });

    app.put('/cities/:id', async (req, res) => {
        const parameters = [...Object.values(req.body), req.params.id];
        await client.query('UPDATE city SET name = $1', parameters);
    });

    app.put('/editions/:id', async (req, res) => {
        const parameters = [...Object.values(req.body), req.params.id];
        await client.query('UPDATE book_edition SET pub_year = $1, pub_city = (SELECT city_id from city WHERE name=$2), publisher_id = (SELECT publisher_id from publisher WHERE name=$3), taken = $4, library_id = (SELECT library_id from library WHERE name=$5), book_id = (SELECT book_id from books WHERE title=$6)', parameters);
    });

    app.post('/author/:id', async (req, res) => {
        const parameters = [...Object.values(req.body), req.params.id];
        await client.query('UPDATE author SET name = $1, middle_name = $2, surname = $3', parameters);
    });
}