const candidate = require("./candidate");

module.exports = (sequelize, Sequelize) => {
  const candidateExam = sequelize.define("candidateexam", {
    candidateId: {
      type: Sequelize.INTEGER,
      allowNull : false
    },
    examId: {
      type: Sequelize.INTEGER,
      allowNull : false
    },
    startTime: {
      type: Sequelize.DATE
    },
    endTime: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.INTEGER,
      allownull: false,
      defaultValue: 0,
      validate: {
        isIn: [[0, 1, 2]]
      }
    }
  });

  return candidateExam;
};