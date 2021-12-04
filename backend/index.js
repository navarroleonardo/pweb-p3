const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./src/models");

db.sequelize.sync();

require("./src/routes/funcionario.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}.`);
});
