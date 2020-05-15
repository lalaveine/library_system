
const express = require('express');
const app = express();
const path = require('path')

// app.use(express.static('views'))

// app.set('view engine' , 'html')

const PORT = process.env.PORT || 3000

app.listen(PORT, (request, response) => {
	console.log('hello from express frame work it\'s working from ' + PORT)
})
const router = express.Router();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});




const pg = require('pg');
const config = {
    user: "dqyxzdhxxhkvwd",
    password: "5dd80d4bfcc94e7bdfced05a2f04d772ffba666f2c7cc03ecd735f6217be82aa",
    database: "dctusulqaa69nh",
    port: 5432,
    host: "ec2-54-246-85-151.eu-west-1.compute.amazonaws.com",
    ssl: true
};

const client = new pg.Client(config);
client.connect();




 
app.use(express.static(path.join(__dirname, 'frontend')))
app.use('/', router);
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '/frontend/dist/index.html')))
router.get('/test', async (req, res) => { let {rows} = await client.query("SELECT * FROM reader");
console.log(rows)
res.send(rows)})




