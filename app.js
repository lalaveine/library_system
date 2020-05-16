
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const client = require('./db/index');
require('./routes/get.js')(app, client);
require('./routes/delete.js')(app, client);
require('./routes/put.js')(app, client);
require('./routes/post.js')(app, client);


app.listen(PORT, (request, response) => {
	console.log('hello from express frame work it\'s working from ' + PORT)
});
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.use(express.static(path.join(__dirname, 'frontend')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/frontend/dist/index.html')));





