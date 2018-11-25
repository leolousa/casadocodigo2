require('marko/node-require').install();            // Importa o módulo do Marko para utilizar com o Node
require('marko/express');                           // Importa o módulo do Marko para utilizar com o Express

const express = require('express');                 // Importa o Express
const app = express();                              // Atribui o Express a variável app
const bodyParser = require('body-parser');          // Importa o o Body Parser
const methodOverride = require('method-override');  // Importa o módulo Method Override do Express

app.use('/estatico',
  express.static('src/app/public'));                // Middleware para tratar as requisições de arquivos estáticos

app.use(bodyParser.urlencoded({
  extended: true                                    // Habilita o bodyParser a receber objetos complexos em formato Json
}));

app.use(methodOverride(function (req, res) {        // Middleware que altera o método de envio do formulário
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

const rotas = require('../app/rotas/rotas');        // Importa o nosso módulo de rotas

rotas(app);                                         // Atribui o módulo rotas à aplicação

module.exports = app;                         // Exporta o módulo app (para uso na Aplicação)