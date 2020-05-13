const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const {errors} = require('celebrate');



const app = express();


app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());

/**
 * ROTA / RECURSO
 * METODOS HTTP
 * GET - BUSCA UMA INFORMAÇÃO NO BACK END
 * POST - CRIA UMA INFORMAÇÃO NO BACK END
 * PUT - ALTERA UMA INFORMAÇÃO NO BACK END
 * DELETE - DELETA INFORMAÇÃO NO BACK END 
 * 
 * TIPOS DE PARAMETROS
 * QUERY: PARAMETROS ENCIADOS NA ROTA APOS "?"  (FILTROS, PAGINAÇÃO)
 * rout parms: parametos utilizadospara identificar rxecursos
 * request body corpo da requisição, utiliado para criar ou alterar rescursos
 */



app.listen(3000);