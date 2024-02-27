const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const database = require("./dataBase");

/*
database
  .insert(dados)
  .into("form")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`deu algo de errado: ${err}`);
  });*/

app.get("/", (req, res) => {
  res.json({
    Success: "Sucesso!",
  });
});

app.get("/teste", (req, res) => {
  res.json({
    Success: "Sucesso!",
  });
});

app.post("/message", (req, res) => {
  let dados = req.body;
  database
    .insert(dados)
    .into("form")
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`deu algo de errado: ${err}`);
    });
  res.sendStatus(200);
});

app.post("/star", (req, res) => {
  let dados = req.body;
  database
    .insert(dados)
    .into("vote")
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`deu algo de errado: ${err}`);
    });
  res.sendStatus(200);
  console.log(dados);
});

app.listen(process.env.PORT || 8081, () => {
  console.log("Servidor rodando com sucesso!");
});
