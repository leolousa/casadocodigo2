require('marko/node-require').install();      // Importa o módulo do Marko para utilizar com o Node
require('marko/express');                     // Importa o módulo do Marko para utilizar com o Express

const express = require('express');           // Importa o Express
const app = express();                        // Atribui o Express a variável app

const rotas = require('../app/rotas/rotas');  // Importa o nosso módulo de rotas

rotas(app);                                   // Atribui o módulo rotas à aplicação

module.exports = app;                         // Exporta o módulo app (para uso na Aplicação)