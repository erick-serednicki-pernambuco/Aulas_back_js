const express = require("express");
const contatosRouter = require("./routes/contatosRouter");
const app = express();


app.use(express.json());

app.get("/", function(req, res) {
  res.send("Olá mundo!");
});

app.use("/contatos", contatosRouter);


app.listen(3000, function() {
  console.log("Servidor iniciado na porta 3000!");
});