const sequelize = require('../config/database')
const Item = require('./item.model');

const db = {
    sequelize,
    Item
}

module.exports = db