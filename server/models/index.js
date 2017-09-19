import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const basename = path.basename(module.filename);
const db = {};
let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else if (process.env === 'test') {
  sequelize = new Sequelize(process.env.DB_NAME_TEST, process.env.DB_USERNAME, process.env.DB_PASSWORD, { dialect: process.env.DB_DIALECT, host: process.env.DB_HOST });
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, { dialect: process.env.DB_DIALECT, host: process.env.DB_HOST });
}

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
