const { createServer } = require("node:http");
const express = require('express');
const { Router } = require('express');

const app = express();
const route = Router();

const users = [
  {
    id: 1,
    name: "Alice Silva",
    email: "alice.silva@example.com",
    senha: "alice234234",
  },
  {
    id: 2,
    name: "Bruno Costa",
    email: "bruno.costa@example.com",
    senha: "brunoCosta3453",
  },
  {
    id: 3,
    name: "Carla Pereira",
    email: "carla.pereira@example.com",
    senha: "c.arla435",
  },
  {
    id: 4,
    name: "David Lima",
    email: "david.lima@example.com",
    senha: "david3342",
  },
  {
    id: 5,
    name: "Elena Rocha",
    email: "elena.rocha@example.com",
    senha: "elena321rocha",
  },
];

const docs = [
  {
    id: 1,
    id_user: 1,
    tipo: "Trabalho",
    titulo: "atividade prática",
    curso: "ADS",
    turno: "manhã",
  },
  {
    id: 2,
    id_user: 1,
    tipo: "Relatório",
    titulo: "análise de dados",
    curso: "Engenharia",
    turno: "tarde",
  },
  {
    id: 3,
    id_user: 3,
    tipo: "Pesquisa",
    titulo: "estudo de mercado",
    curso: "Administração",
    turno: "noite",
  },
  {
    id: 4,
    id_user: 2,
    tipo: "Apresentação",
    titulo: "projeto final",
    curso: "Design",
    turno: "manhã",
  },
  {
    id: 5,
    id_user: 2,
    tipo: "Ensaios",
    titulo: "trabalho de literatura",
    curso: "Jornalismo",
    turno: "tarde",
  },
];


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
