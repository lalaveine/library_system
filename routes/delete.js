
module.exports = function (app, client) {
    app.delete('/readers/:id', async (req, res) => {
        await client.query('DELETE FROM reader WHERE reader.reader_id=$1', [req.params.id])
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.delete('/journal/:id', async (req, res) => {
        await client.query('DELETE FROM journal WHERE journal.entry_id=$1', [req.params.id])
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.delete('/publishers/:id', async (req, res) => {
        await client.query('DELETE FROM publisher WHERE publisher_id=$1', [req.params.id])
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.delete('/books/:id', async (req, res) => {
        await client.query('DELETE FROM book WHERE book.book_id=$1', [req.params.id])
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.delete('/editions/:id', async (req, res) => {
        await client.query('DELETE FROM book_edition WHERE edition.edition_id=$1', [req.params.id])
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.delete('/cities/:id', async (req, res) => {
        await client.query('DELETE FROM city WHERE city.city_id=$1', [req.params.id])
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.delete('/libraries/:id', async (req, res) => {
        await client.query('DELETE FROM library WHERE library.library_id=$1', [req.params.id])
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });

    app.delete('/authors/:id', async (req, res) => {
        await client.query('DELETE FROM author WHERE author.author_id=$1', [req.params.id])
            .then(() => { res.status(200).send() })
            .catch((err) => {
                res.status(500).send(err)
            });
    });
}
