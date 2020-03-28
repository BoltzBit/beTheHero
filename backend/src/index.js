const express = require('express');
const cors = require('cors');
const routes = require('./routes.js')
const app = express();


app.use(cors());
//é necessário passar este parametro para realizar a conversao do corpo da requisicao para json
app.use(express.json());

app.use(routes);
//a ordem do request, response importa
//recurso vem depois da barra

/*metodos http
	-get: buscar/listar informações,
	-post: criar uma informação no backend,
	-put: alterar informação
	-delete: deletar informação no backend
*/

/*tipos de parametros
	Query Params: parametros nomeados enviados na rota, após o simbolo de interrogação
	servem para filtros, paginação
	Route Params: parametros utilizados para identificar recursos
	Request body: corpo da requisicao, utilizado para criar ou alterar recursos
*/

/*
	driver: select * from users;
	query builder: table('users').select('*').where()
*/

app.listen(3333);