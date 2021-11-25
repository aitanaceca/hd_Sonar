const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const databaseConfig = require('./config/database').development;
const modelDirectory = path.join(__dirname, 'models');
const models = {};
let connection;

function loadModels() {
  fs.readdirSync(modelDirectory).forEach((file) => {
    const model = require(`${path.join(modelDirectory, file)}`)(connection, Sequelize.DataTypes);
    models[model.name] = model;
  });

  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
}

async function init() {
  try {
    connection = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, databaseConfig);
    await connection.authenticate();
    console.log('Connection has been established successfully.');
    loadModels();
  } catch (error) {
    console.log('Cannot connect to database');
    process.exit(1);
  }
}

async function close() {
  await connection.close();
  console.log('Connection has been closed successfully');
}

module.exports = {
  init,
  close,
  connection,
  models
}