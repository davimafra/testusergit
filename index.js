require('dotenv').config();
global.fetch = require('node-fetch');
global.axios = require('axios');
const express = require('express');
const app = express();

app.use( 
express.urlencoded({
    extended: true,
}),
);
app.use(express.json());




const apiroutes = require('./routes/api')
app.use('/api', apiroutes)

app.get('/api', (req, res) => {
res.json({message: 'doc api ... bla bla bla' });
console.log('/api');
});


app.listen(8000);
