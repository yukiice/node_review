const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('newtest', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql'
})

class Brand extends Model {}

Brand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    website: DataTypes.STRING,
    phoneRank: DataTypes.STRING
}, {
    tableName: 'brand',
    createdAt: false,
    updatedAt: false,
    sequelize
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
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: DataTypes.DOUBLE,
    score: DataTypes.DOUBLE,
    brandId: {
        field: 'brand_id',
        type: DataTypes.INTEGER,
        references: {
            model: Brand,
            key: 'id'
        }
    }
}, {
    tableName: 'product',
    createdAt: false,
    updatedAt: false,
    sequelize
})


Product.belongsTo(Brand, { foreignKey: 'brandId' })


async function queryProduct() {
    const res = await Product.findAll({
        include: Brand
    })
    console.log(res);
}

queryProduct()