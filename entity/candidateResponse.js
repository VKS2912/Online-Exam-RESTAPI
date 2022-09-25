module.exports = (sequelize, Sequelize) => {
    const candiadteResponse = sequelize.define("candidateresponse", {  
      candidateId: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      examId: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      queId: {
        type: Sequelize.INTEGER
      },
      responseId: {
        type: Sequelize.INTEGER
      }
    });
    return candiadteResponse;
  };