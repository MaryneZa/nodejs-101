const { DataTypes, Model} = require('@sequelize/core');
const sequelize = require('../config/database')
// @Table({ schema: 'public', tableName: 'users' }) : Manually setting
// @Table({ schema: 'public' })
class Item extends Model {

    getItemDetail(){
        return this.name
    }

    get itemName() {
        return this.getDataValue('name').toUpperCase();
    }

    set itemName(value) {
        this.setDataValue('name', value);
    }
}

Item.init(
    {
        id: {
            type: new DataTypes.UUID,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        sequelize,// passing the `sequelize` instance is required
        modelName: 'Item',  
    },
);

module.exports = Item;