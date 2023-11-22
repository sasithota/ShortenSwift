const express = require('express');

const app = express();

app.get('/', (request, response) => {
	console.log('server access');
	response.send('hello world');
})

app.listen(3000, () => {
	console.log('server is up!!');
})
