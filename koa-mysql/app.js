const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const sequelize = new Sequelize('newtest', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql'
})

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: DataTypes.DOUBLE,
    score: DataTypes.DOUBLE
}, {
    tableName: 'product',
    createdAt: false,
    updatedAt: false,
    sequelize,
})

async function queryProducts() {
    const res = await Product.findAll({
        where: {
            price: {
                [Op.gte]: 5000
            }
        }
    })
    console.log(res);
}
// 插入数据


queryProducts()