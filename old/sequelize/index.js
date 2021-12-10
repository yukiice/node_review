const {Sequelize, DataTypes, Model, Op} = require('sequelize')
const sequelize = new Sequelize('yukiicehub', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql'
})

class Product extends Model {
}

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
    sequelize
})

async function queryProduct() {
    const res = await Product.findAll({
        where: {
            price: {
                [Op.gt]: 5000
            }
        }
    })
    console.log(res)
}

queryProduct()

async function createColumn() {
    const res = await Product.create({
        title: '华为P50',
        brand: '华为',
        price: 9999,
        score: 9.9,
        voteCnt: 46,
        url: 'https://xiaomi.com',
        pid: 4545645,
        brand_id: 15
    })
    console.log(res)
}

createColumn()