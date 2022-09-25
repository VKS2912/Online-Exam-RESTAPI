module.exports = (sequelize, Sequelize) => {
  const candiadte = sequelize.define("candidate", {      // product is the entity name
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    contact: {
      type: Sequelize.STRING
    }
  });
  return candiadte;
};