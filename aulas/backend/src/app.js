const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors()); 

module.exports = app;


/**
 * 
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação do backend
 * PUT: Alterar uma informação do 
 * DELETE: Deletar
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após do "?" (Filtros,paginação)
  * Route Params: Parâmetros utilizado para identificar recursos 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL ...
   * NoSQL : MongoDB ...
   */

/**
 * Driver: SELECT * FROM user
 * Query Builder: table('users).select(*).where()
 */



