const express = require('express');

const bodyParser = require('body-parser');

const userRoute = require('./routes/userRoute')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const porta = 3000;

userRoute(app);

app.get('/', (req, res) => res.send('Olá mundo pelo express'))

app.listen(porta, () => console.log("APP RODANDO NA PORTA ", porta));