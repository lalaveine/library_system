
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const client = require('./db/index');
const bodyParser = require('body-parser');


f
app.listen(PORT, (request, response) => {
	console.log('hello from express frame work it\'s working from ' + PORT)
});
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/dist/index.html')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


require('./routes/get.js')(app, client);
require('./routes/delete.js')(app, client);
require('./routes/put.js')(app, client);
require('./routes/post.js')(app, client);



