/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar\Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipo de parâmetros
   * 
   * QUERY PARAMS: Parâmetro nomeados enviados na rota, depois do ?  (Filtros, paginação)
   * ROUTE PARAMS: Parâmentros utilizados para identificar recursos
   * REQUEST BODY: Corpo da requisão, utilizado para criar ou alterar recursos
   * 
   */

   /**
    * Tipos de Banco de Dados
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, Couchdb
    */

    /**
     * Formas de Manipulação
     * 
     * Driver: Baixar para usar os comandos: Exemplo: SELECT * FROM usuario
     * Usar comandos internos - Query Builder: table('usuario').select('*').where() - Vantagem, serve para todos os bancos.
     */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
