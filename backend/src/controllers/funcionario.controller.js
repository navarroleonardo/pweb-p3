const db = require("../models");
const Funcionario = db.funcionarios;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const { body } = req;

  const { nome, email, senha, documento, grupo, obs } = body;

  if (!nome || !senha || !documento || !obs) {
    res.status(400).send({ mensagem: "Os parâmetros nome, senha, documento e obs são obrigatórios!" });
  }

  const funcionario = {
    nome,
    email,
    senha,
    documento,
    grupo,
    obs,
  };

  Funcionario.create(funcionario)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send({
        mensagem: "Algum erro ocorreu ao tentar criar um funcionário."
      });
    });
};

exports.findAll = (req, res) => {
  const nome = req.query.nome;

  const condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Funcionario.findAll({ where: condition })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        mensagem: "Algum erro ocorreu ao tentar buscar os funcionários."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Funcionario.findByPk(id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        mensagem: "Algum erro ocorreu ao tentar buscar o funcionário."
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Funcionario.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          mensagem: "O funcionário foi atualizado com sucesso."
        });
      } else {
        res.status(400).send({
          mensagem: "Algum erro ocorreu ao tentar atualizar o funcionário."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        mensagem: "Algum erro ocorreu ao tentar atualizar o funcionário."
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Funcionario.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          mensagem: "O funcionário foi deletado com sucesso."
        });
      } else {
        res.status(400).send({
          mensagem: "Algum erro ocorreu ao tentar deletar o funcionário."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        mensagem: "Algum erro ocorreu ao tentar deletar o funcionário."
      });
    });
};