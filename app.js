
const express = require('express');
const app = express();
app.use(express.static('views'))

app.set('view engine' , 'html')

const PORT = process.env.PORT || 3000

app.listen(PORT, (request, response) => {
	console.log('hello from express frame work it\'s working from ' + PORT)
})

app.get('/', (request, response) => {
	response.render('index.html')
})

app.get('/about', (request, response) =>{
	response.render('about')
})



