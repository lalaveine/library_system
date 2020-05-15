
module.exports = function (app, client) {
    app.get('/readers', async (req, res) => {
        const defaultParams = { name: '%', surname: '%', middle_name:'%', email:'%'} 
        const parameters = Object.values({...defaultParams, ...req.query});
        const { rows } = await client.query("SELECT * FROM reader WHERE name like $1 and surname like $2 and middle_name like $3 and email like $4", parameters);
        res.send(rows);
    });

    app.get('/books', async (req, res) => {
        const defaultParams = {name: '%', surname: '%', middle_name:'%', email:'%'} 
        const parameters = Object.values({...defaultParams, ...req.query});
        console.log(parameters)
        const { rows } = await client.query("SELECT * FROM reader WHERE name like $1 and name like $2 and surname like $3 and title like $4 and email like $5", parameters);
        res.send(rows);
    });
    
    app.get('/journal', async (req, res) => {
        const { rows } = await client.query("SELECT * FROM journal");
        res.send(rows)
    });
}