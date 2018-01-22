import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import Sequelize from 'sequelize';
import configure from '../config/config.json';

dotenv.config();
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = configure[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize('postgres://pgkibgwmanjzbm:fa406ff85392efcb2afe2e9d0321be0a7874c17c26ffa9703a458dac5b0153d9@ec2-184-73-167-43.compute-1.amazonaws.com:5432/d3kbf0mr4h27re', {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
  }
});
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
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
