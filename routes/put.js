module.exports = function (app, client) {
    app.put('/readers/:id', async (req, res) => {
        const parameters = Object.values(req.body);
        await client.query('UPDATE reader SET name = $1, middle_name = $2, surname = $3, email = $4 WHERE reader.reader_id = $5', parameters);
    });
}