const dbconfig = require('../dbConfig/dbconfig.js')
const { Sequelize, DataTypes } = require('sequelize')
const logger = require('../loggerConfig/loggerConfig')

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  // logging:false,
  operationAliases: dbconfig.operationAliases,
  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle,
  },
})
sequelize
  .authenticate()
  .then(() => {
    logger.info('DataBase Connected Successfuly..')
  })
  .catch((err) => {
    logger.error(
      'Unable to connect with DataBase - ' + err + ' : ' + __filename
    )
    console.log('error' + err)
  })
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.candidates = require('./candidate.js')(sequelize, DataTypes)
db.candidateExam = require('./candidateExam')(sequelize, DataTypes)
db.candidateResponse = require('./candidateResponse')(sequelize, DataTypes)

db.sequelize.sync({ force: false }).then(() => {
  console.log('yes re sync is done')
})

db.candidates.hasMany(db.candidateExam, { foreignKey: 'candidateId' })
db.candidateExam.belongsTo(db.candidates)
module.exports = db
