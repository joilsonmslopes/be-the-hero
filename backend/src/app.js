const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes'); // importando uma rota

const app = express();

app.use(cors());
app.use(express.json()); //Usado antes das rotas para tornar o objeto json entendível pela aplicação
app.use(routes);
app.use(errors());

module.exports = app;