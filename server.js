const express = require('express');
const { Router } = require('express');

const users = require('./users.json')
const docs = require('./docs.json')

const app = express();
const route = Router();

app.use(express.json())

route.get('/', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      message:
        "API rodando... entre nas rotas '/users' ou '/docs' para ver informações",
    }))
})

route.get('/users', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(users));
})

route.get('/docs', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(docs));
})

route.get('*', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 404;
    res.end(
      JSON.stringify({
        message: `Erro ${res.statusCode}: Rota não encontrada!`,
      }));
})

const port = 3300;

app.use(route)
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
