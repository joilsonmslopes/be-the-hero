const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // importando uma rota

const app = express();

app.use(cors());
app.use(express.json()); //Usado antes das rotas para tornar o objeto json entendível pela aplicação
app.use(routes);

app.listen(3333)