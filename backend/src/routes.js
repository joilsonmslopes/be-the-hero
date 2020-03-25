const express = require('express');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); // Para listar as ongs criadas
routes.post('/ongs', OngController.create); // Para cadastrar as ongs

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index); //Para listar os casos criados
routes.post('/incidents', IncidentController.create); //Para criar os casos
routes.delete('/incidents/:id', IncidentController.delete) // Para Deletar um caso pelo parametro 'id'


module.exports = routes;