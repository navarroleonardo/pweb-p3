module.exports = (sequelize, Sequelize) => {
  const Funcionarios = sequelize.define("funcionarios", {
    nome: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    senha: {
      type: Sequelize.STRING
    },
    documento: {
      type: Sequelize.STRING
    },
    grupo: {
      type: Sequelize.STRING
    },
    obs: {
      type: Sequelize.STRING
    }
  });

  return Funcionarios;
};
