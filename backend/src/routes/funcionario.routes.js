module.exports = app => {
  const funcionarios = require("../controllers/funcionario.controller.js");

  var router = require("express").Router();

  router.post("/", funcionarios.create);

  router.get("/", funcionarios.findAll);

  router.get("/:id", funcionarios.findOne);

  router.put("/:id", funcionarios.update);

  router.delete("/:id", funcionarios.delete);

  app.use('/api/funcionarios', router);
};
