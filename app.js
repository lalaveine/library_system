
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
 
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router);

// app.get('/', (request, response) => {
// 	response.render('index.html')
// })

// app.get('/about', (request, response) =>{
// 	response.render('about')
// })
router.get('/test', (req, res) => res.sendFile(path.join(__dirname, '/public/dist/index.html')))




