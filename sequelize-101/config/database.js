const { Sequelize, Op, Model, DataTypes } = require('@sequelize/core');
const { PostgresDialect } = require('@sequelize/postgres');
const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'mydatabase',
  user: 'myuser',
  password: 'mypassword',
  host: 'localhost',
  port: 5500,
});

module.exports = sequelize

